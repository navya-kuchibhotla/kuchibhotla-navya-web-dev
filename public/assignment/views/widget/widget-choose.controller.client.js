(function(){
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController);

    function NewWidgetController($sce, $routeParams, $location, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;
        vm.pageId = $routeParams.pageId;
        vm.createHeaderWidget = createHeaderWidget;
        vm.createImageWidget = createImageWidget;
        vm.createYouTubeWidget = createYouTubeWidget;

        function createHeaderWidget(pageId) {
            var headerWidget = {
                type: "HEADING"
            };
            WidgetService
                .createWidget(pageId, headerWidget)
                .then(function(response){

                    var newWidget = response.data;
                    if(newWidget) {
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });
        }

        function createImageWidget(pageId) {
            var imageWidget = {
                type: "IMAGE"
            };
            WidgetService
                .createWidget(pageId, imageWidget)
                .then(function (response) {
                    var newWidget = response.data;
                    if (newWidget) {
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });
        }

        function createYouTubeWidget(pageId) {
            var youtubeWidget = {
                type: "YOUTUBE"
            };
            WidgetService
                .createWidget(pageId, youtubeWidget)
                .then(function(response){
                    var newWidget = response.data;
                    if(newWidget) {
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget/"+newWidget._id);
                    } else {
                        vm.error = "Unable to create widget";
                    }
                });

        }
    }
})();