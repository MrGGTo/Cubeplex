import React, { Component, useState } from "react";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const fontSize = {
	header: width / 10,
	s: width / 30,
	m: width / 25,
	l: width / 18,
	xl: width / 15,
	xxl: width / 8,
	xxxl: width / 5,
};

export const spacing = {
	xs: width / 55,
	s: width / 35,
	m: width / 25,
	l: width / 15,
	xl: width / 6,
};
