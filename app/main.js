var tag = "main::";

angular.module('home', [
    'ui.router'
]);

angular.module('home').config(function ($locationProvider,
                                        $stateProvider,
                                        $urlRouterProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("!");

    $stateProvider.state("entdisk", {
        url: '/entdisk/:fileId',
        controller: "EntDiskCtrl",
        templateUrl: "entdisk.html"
    }).state("persondisk", {
        url: '/persondisk/:fileId',
        controller: "PersonDiskCtrl",
        templateUrl: "persondisk.html"
    }).state("myshare", {
        url: '/myshare',
        controller: "MyShareCtrl",
        templateUrl: "myshare.html"
    }).state("myremind", {
        url: '/myremind',
        controller: "MyRemindCtrl",
        templateUrl: "myremind.html"
    }).state("fullsearch", {
        url: '/fullsearch',
        controller: "FullSearchCtrl",
        templateUrl: "fullsearch.html"
    }).state("recycle", {
        url: '/recycle',
        controller: "RecycleCtrl",
        templateUrl: "recycle.html"
    });

    $urlRouterProvider.when('', '/entdisk/').otherwise('/entdisk/');
});

angular.module("home").run(function ($rootScope,
                                     $translate,
                                     $window,
                                     $localStorage,
                                     constants,
                                     cache,
                                     modal,
                                     LoginDataLoader,
                                     UserLoader) {
    $rootScope._ = _;
    $rootScope.constants = constants;
    $rootScope.cache = cache;
    $localStorage.$default({
        'lang': 'zh_CN',
        'stp': 'list',
        'navMini': false
    });
    angular.extend(cache, {
        showType: $localStorage.stp,
        fileNavMini: $localStorage.navMini,
        clientId: $localStorage.clientId
    });

    $rootScope.modal = angular.extend(modal, {});
    LoginDataLoader();
    UserLoader.fetchDeptAndUsers().then(function (deptAndUser) {
        $rootScope.userList = deptAndUser.userList;
        $rootScope.deptList = deptAndUser.deptList;
        $rootScope.$emit("dept-user-load");
    });
    $rootScope.currentFolder = undefined;
});

angular.bootstrap(document, ['home']);