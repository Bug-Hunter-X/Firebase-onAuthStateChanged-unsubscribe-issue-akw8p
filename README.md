# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener:  failure to properly unsubscribe, leading to memory leaks and unexpected behavior.  The `authBug.js` file shows the problematic code, while `authBugSolution.js` provides a corrected version.

## Problem

The original code attaches the `onAuthStateChanged` listener but lacks a mechanism to reliably unsubscribe. This means the listener continues to run even after it's no longer needed, consuming resources and potentially interfering with other parts of the application. 

## Solution

The solution involves ensuring that the `unsubscribe` function, returned by `onAuthStateChanged`, is called when the listener is no longer required. This cleanly removes the listener, preventing resource leaks and ensuring predictable application behavior.

## How to reproduce

1. Clone the repository
2. Install Firebase (npm install firebase)