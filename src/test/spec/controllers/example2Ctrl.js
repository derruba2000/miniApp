describe("Example2CtrlSpec", function () {
    beforeEach(module("miniApp"));

    describe("example2Ctrl", function () {
        var scope,
            controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should assign message to $watch", function () {
            controller("example2Ctrl", {$scope: scope});
            expect(scope.message).toBe("Using $watch function");
        });
    });
});