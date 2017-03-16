'use strict';

var reactSortableHoc = require("react-sortable-hoc");

exports.sortableContainer = function(element){
    return function(config){
        return function(){
            return reactSortableHoc.sortableContainer(element, config);
        };
    };
};


exports.sortableElement = function(element){
    return function(config){
        return function(){
            return reactSortableHoc.sortableElement(element, config);
        };
    };
};


exports.sortableHandle = function(element){
    return function(config){
        return function(){
            return reactSortableHoc.sortableHandle(element, config);
        };
    };
};


exports.arrayMove = function(array){
    return function(prevIndex){
        return function(newIndex){
            return function(){
                return reactSortableHoc.arrayMove(array, prevIndex, newIndex);
            };

        };
    };
};
