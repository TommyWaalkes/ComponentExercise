"use strict";
{
    let testCom = {
        controller: "testController",
        template: `<p> Hey There my name is slim shady</p>
        <p> {{$ctrl.message}}</p> 
        <button ng-click="$ctrl.helloWorld()">Hello World!</button>`
    };

    function testController(){
        const vm = this;
        vm.message = "Hey this is a message";
        vm.helloWorld = function(){
            console.log("Hello World");
            console.log(vm.dog);
        }
        vm.dog = {
            name:"Muffin",
            size: "Medium"
        }


    }

    angular
        .module("test")
        .controller("testController", testController)
        .component("testCom", testCom);

}