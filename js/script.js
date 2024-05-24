// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {

  //input
  let firstNumber = parseInt(document.getElementById("first-number").value)
  let secondNumber = parseInt(document.getElementById("second-number").value)

  //process
  let counter = 0
  let result = 0

  while (counter < secondNumber) {
    result += firstNumber
    counter += 1
  }

  let finalResult = result

  // output 
  document.getElementById("final-answer").innerHTML = "Your result is " + finalResult
}