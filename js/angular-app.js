const app = angular.module("campusEcoApp", []);

app.controller("TrackingController", function ($scope) {
    $scope.trackingNumber = "";
    $scope.status = "Waiting for tracking number";

    $scope.trackPackage = function () {
        if ($scope.trackingNumber) {
            $scope.status = "Package is En Route";
        }
    };
});