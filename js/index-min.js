"use strict";var writeUsBtn=document.querySelector(".write-us.button-decoration"),writeUsPopup=document.querySelector(".modal.modal-write-us"),closeWriteUs=document.querySelector(".close-write-us"),closeMap=document.querySelector(".close-map"),mapPopup=document.querySelector(".modal.modal-map"),map=document.querySelector(".map-overlay"),writeUsForm=document.querySelector(".write-us-form"),writeUsFullname=document.getElementById("fullname"),writeUsEmail=document.getElementById("email"),writeUsMessage=document.getElementById("message"),writeUsFields=[writeUsFullname,writeUsEmail,writeUsMessage];function cleanUpInvalid(){writeUsFields.forEach(function(e){e.classList.remove("invalid")})}writeUsForm.onsubmit=function(e){writeUsFields.forEach(function(e){e.classList.remove("invalid")}),writeUsForm.checkValidity()||(writeUsPopup.classList.remove("modal-error"),e.preventDefault(),writeUsPopup.classList.add("modal-error"),writeUsFields.forEach(function(e){e.checkValidity()||e.classList.add("invalid")}))},map.onclick=function(e){mapPopup.classList.add("show")},writeUsBtn.onclick=function(e){e.preventDefault(),writeUsPopup.classList.add("show")},closeWriteUs.onclick=function(e){writeUsPopup.classList.remove("show"),writeUsPopup.classList.remove("modal-error"),cleanUpInvalid()},closeMap.onclick=function(e){mapPopup.classList.remove("show")},window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),writeUsBtn.classList.contains("show")&&(writeUsPopup.classList.remove("show"),writeUsPopup.classList.remove("modal-error"),cleanUpInvalid()),mapPopup.classList.contains("show")&&mapPopup.classList.remove("show"))});
