<template>
  <input type="checkbox">
</template>

<style>
input[type="checkbox"]:focus{
   outline: none;
 }

 input[type="checkbox"] {
   appearance: none;
   background-color: #fafafa;
   border: 1px solid #d3d3d3;
   border-radius: 3px;
   cursor: pointer;
   height: 17px;
   position: relative;
   transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
   width: 44px;
   vertical-align: top;
   -webkit-appearance: none;
 }
 input[type="checkbox"]:after {
   background-color: white;
   border: 1px solid #d3d3d3;
   border-radius: 2px;
   box-shadow: inset 0 -3px 3px rgba(0, 0, 0, 0.025), 0 1px 4px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.1);
   content:'';
   display: block;
   height: 15px;
   left: 0;
   position: absolute;
   right: 16px;
   top: 0;
   transition: border .25s .15s, left .25s .1s, right .15s .175s;
 }
 input[type="checkbox"]:checked {
   border-color: #E85248;
   box-shadow: inset 0 0 0 13px #E85248;
   padding-left: 18px;
   transition: border .25s, box-shadow .25s, padding .25s .15s;
 }
 input[type="checkbox"]:checked:after {
   border-color: #E85248;
   left: 16px;
   right: 0;
   transition: border .25s, left .15s .25s, right .25s .175s;
 }
</style>
