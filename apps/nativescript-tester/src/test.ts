import { runTestApp } from "@nativescript/unit-test-runner";
// import other polyfills here

runTestApp({
	runTests: () => {
		// @ts-ignore
    const tests = require.context("./", true, /\.spec\.js$/);
		tests.keys().map(tests);
	},
});
