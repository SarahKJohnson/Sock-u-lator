// Pattern baker
//let sockStitches;

function sockPattern() {

    var gauge = document.forms["patternForm"]["gauge"].value;
    var footCirc = document.forms["patternForm"]["footCirc"].value;
    var footLength = document.forms["patternForm"]["footLength"].value;

    let pattern = [];

    if (footCirc == 5.5 && gauge == 4) {
        pattern = [20, 10, 8, 7, 3, 6, 28, 2, 12, 1];    
    } else if (footCirc == 5.5 && gauge == 4.5) {
        pattern = [22, 11, 10, 7, 3, 7, 30, 2, 14, 1]; 
    } else if (footCirc == 5.5 && gauge == 5) {
        pattern = [24, 12, 10, 8, 4, 7, 32, 2, 16, 2];    
    } else if (footCirc == 5.5 && gauge == 5.5) {
        pattern = [28, 14, 12, 9, 4, 8, 36, 3, 16, 2]; 
    } else if (footCirc == 5.5 && gauge == 6) {
        pattern = [30, 15, 12, 10, 5, 8, 38, 3, 18, 2];
    } else if (footCirc == 5.5 && gauge == 6.5) {
        pattern = [32, 16, 14, 11, 6, 9, 42, 3, 20, 3]; 
    } else if (footCirc == 5.5 && gauge == 7) {
        pattern = [34, 17, 14, 11, 5, 9, 42, 4, 18, 3];
    } else if (footCirc == 5.5 && gauge == 7.5) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 4]; 
    } else if (footCirc == 5.5 && gauge == 8) {
        pattern = [40, 20, 16, 13, 6, 10, 48, 4, 24, 4];
    } else if (footCirc == 5.5 && gauge == 8.5) {
        pattern = [42, 21, 18, 14, 7, 11, 52, 4, 26, 4];
    } else if (footCirc == 5.5 && gauge == 9) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 6 && gauge == 4) {
        pattern = [22, 11, 10, 7, 3, 7, 30, 2, 14, 1]; 
    } else if (footCirc == 6 && gauge == 4.5) {
        pattern = [24, 12, 10, 8, 4, 7, 32, 2, 16, 2];
    } else if (footCirc == 6 && gauge == 5) {
        pattern = [28, 14, 12, 9, 4, 8, 36, 3, 16, 2]; 
    } else if (footCirc == 6 && gauge == 5.5) {
        pattern = [30, 15, 12, 10, 5, 8, 38, 3, 18, 2];
    } else if (footCirc == 6 && gauge == 6) {
        pattern = [32, 16, 14, 11, 6, 9, 42, 3, 20, 3];
    } else if (footCirc == 6 && gauge == 6.5) {
        pattern = [36, 18, 16, 12, 6, 10, 46, 4, 20, 3];
    } else if (footCirc == 6 && gauge == 7) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 3];
    } else if (footCirc == 5.5 && gauge == 7.5) {
        pattern = [40, 20, 16, 13, 6, 10, 48, 4, 24, 4];
    } else if (footCirc == 6 && gauge == 8) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 6 && gauge == 8.5) {
        pattern = [46, 23, 20, 15, 7, 12, 56, 5, 26, 4];
    } else if (footCirc == 6 && gauge == 9) {
        pattern = [50, 25, 20, 17, 9, 12, 60, 5, 30, 5];
    } else if (footCirc == 6.5 && gauge == 4) {
        pattern = [24, 12, 10, 8, 4, 7, 32, 2, 16, 2];
    } else if (footCirc == 6.5 && gauge == 4.5) {
        pattern = [26, 13, 12, 9, 5, 8, 36, 2, 18, 2];
    } else if (footCirc == 6.5 && gauge == 5) {
        pattern = [30, 15, 12, 10, 5, 8, 38, 3, 18, 2];
    } else if (footCirc == 6.5 && gauge == 5.5) {
        pattern = [32, 16, 14, 11, 6, 9, 42, 3, 20, 3];
    } else if (footCirc == 6.5 && gauge == 6) {
        pattern = [36, 18, 16, 12, 6, 10, 46, 4, 20, 3];
    } else if (footCirc == 6.5 && gauge == 6.5) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 3];
    } else if (footCirc == 6.5 && gauge == 7) {
        pattern = [42, 21, 18, 14, 7, 11, 52, 4, 26, 4];
    } else if (footCirc == 6.5 && gauge == 7.5) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 6.5 && gauge == 8) {
        pattern = [48, 24, 20, 16, 8, 12, 58, 5, 28, 5];
    } else if (footCirc == 6.5 && gauge == 8.5) {
        pattern = [50, 25, 20, 17, 9, 12, 60, 5, 30, 5];
    } else if (footCirc == 6.5 && gauge == 9) {
        pattern = [54, 27, 22, 18, 9, 13, 64, 6, 30, 5];
    } else if (footCirc == 7 && gauge == 4) {
        pattern = [26, 13, 12, 9, 5, 8, 36, 2, 18, 2];
    } else if (footCirc == 7 && gauge == 4.5) {
        pattern = [28, 14, 12, 9, 4, 8, 36, 3, 16, 2];
    } else if (footCirc == 7 && gauge == 5) {
        pattern = [32, 16, 14, 11, 6, 9, 42, 3, 20, 3];
    } else if (footCirc == 7 && gauge == 5.5) {
        pattern = [36, 18, 16, 12, 6, 10, 46, 4, 20, 3];
    } else if (footCirc == 7 && gauge == 6) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 3];
    } else if (footCirc == 7 && gauge == 6.5) {
        pattern = [42, 21, 18, 14, 7, 11, 52, 4, 26, 4];
    } else if (footCirc == 7 && gauge == 7) {
        pattern = [46, 23, 20, 15, 7, 12, 56, 5, 26, 4];
    } else if (footCirc == 7 && gauge == 7.5) {
        pattern = [48, 24, 20, 16, 8, 12, 58, 5, 28, 5];
    } else if (footCirc == 7 && gauge == 8) {
        pattern = [52, 26, 22, 17, 8, 13, 62, 6, 28, 5];
    } else if (footCirc == 7 && gauge == 8.5) {
        pattern = [54, 27, 22, 18, 9, 13, 64, 6, 30, 5];
    } else if (footCirc == 7 && gauge == 9) {
        pattern = [58, 29, 24, 19, 9, 14, 68, 6, 34, 6];
    } else if (footCirc == 7.5 && gauge == 4) {
        pattern = [28, 14, 12, 9, 4, 8, 36, 3, 16, 2];
    } else if (footCirc == 7.5 && gauge == 4.5) {
        pattern = [30, 15, 12, 10, 5, 8, 38, 3, 18, 2];
    } else if (footCirc == 7.5 && gauge == 5) {
        pattern = [34, 17, 14, 11, 5, 9, 42, 3, 22, 3];
    } else if (footCirc == 7.5 && gauge == 5.5) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 3];
    } else if (footCirc == 7.5 && gauge == 6) {
        pattern = [42, 21, 18, 14, 7, 11, 52, 4, 26, 4];
    } else if (footCirc == 7.5 && gauge == 6.5) {
        pattern = [46, 23, 20, 15, 7, 12, 56, 5, 26, 4];
    } else if (footCirc == 7.5 && gauge == 7) {
        pattern = [48, 24, 20, 16, 8, 12, 58, 5, 28, 5];
    } else if (footCirc == 7.5 && gauge == 7.5) {
        pattern = [52, 26, 22, 17, 8, 13, 62, 6, 28, 5];
    } else if (footCirc == 7.5 && gauge == 8) {
        pattern = [56, 28, 24, 19, 10, 14, 68, 6, 32, 6];
    } else if (footCirc == 7.5 && gauge == 8.5) {
        pattern = [58, 29, 24, 19, 9, 14, 68, 6, 34, 6];
    } else if (footCirc == 7.5 && gauge == 9) {
        pattern = [62, 31, 26, 21, 11, 15, 74, 7, 34, 6];
    } else if (footCirc == 8 && gauge == 4) {
        pattern = [30, 15, 12, 10, 5, 8, 38, 3, 18, 2];
    } else if (footCirc == 8 && gauge == 4.5) {
        pattern = [32, 16, 14, 11, 6, 9, 42, 3, 20, 3];
    } else if (footCirc == 8 && gauge == 5) {
        pattern = [36, 18, 16, 12, 6, 10, 46, 4, 20, 3];
    } else if (footCirc == 8 && gauge == 5.5) {
        pattern = [40, 20, 16, 13, 6, 10, 48, 4, 24, 4];
    } else if (footCirc == 8 && gauge == 6) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 8 && gauge == 6.5) {
        pattern = [46, 23, 20, 15, 7, 12, 56, 5, 26, 4];
    } else if (footCirc == 8 && gauge == 7) {
        pattern = [50, 25, 20, 17, 9, 12, 60, 5, 30, 5];
    } else if (footCirc == 8 && gauge == 7.5) {
        pattern = [54, 27, 22, 18, 9, 13, 64, 6, 30, 5];
    } else if (footCirc == 8 && gauge == 8) {
        pattern = [58, 29, 24, 19, 9, 14, 68, 6, 34, 6];
    } else if (footCirc == 8 && gauge == 8.5) {
        pattern = [62, 31, 26, 21, 11, 15, 74, 7, 34, 6];
    } else if (footCirc == 8 && gauge == 9) {
        pattern = [64, 32, 26, 21, 10, 15, 74, 7, 36, 7];
    } else if (footCirc == 8.5 && gauge == 4) {
        pattern = [30, 15, 12, 10, 5, 8, 38, 3, 18, 2];
    } else if (footCirc == 8.5 && gauge == 4.5) {
        pattern = [34, 17, 14, 11, 5, 9, 42, 3, 22, 3];
    } else if (footCirc == 8.5 && gauge == 5) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 3];
    } else if (footCirc == 8.5 && gauge == 5.5) {
        pattern = [40, 20, 16, 13, 6, 10, 48, 4, 24, 4];
    } else if (footCirc == 8.5 && gauge == 6) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 8.5 && gauge == 6.5) {
        pattern = [48, 24, 20, 16, 8, 12, 58, 5, 28, 5];
    } else if (footCirc == 8.5 && gauge == 7) {
        pattern = [52, 26, 22, 17, 8, 13, 62, 6, 28, 5];
    } else if (footCirc == 8.5 && gauge == 7.5) {
        pattern = [56, 28, 24, 19, 10, 14, 68, 6, 32, 6];
    } else if (footCirc == 8.5 && gauge == 8) {
        pattern = [60, 30, 26, 20, 10, 15, 72, 7, 32, 6];
    } else if (footCirc == 8.5 && gauge == 8.5) {
        pattern = [66, 33, 28, 22, 11, 16, 78, 7, 38, 7];
    } else if (footCirc == 8.5 && gauge == 9) {
        pattern = [68, 34, 28, 23, 12, 16, 80, 8, 36, 7];
    } else if (footCirc == 9 && gauge == 4) {
        pattern = [32, 16, 14, 11, 6, 9, 42, 3, 20, 3];
    } else if (footCirc == 9 && gauge == 4.5) {
        pattern = [36, 18, 16, 12, 6, 10, 46, 4, 20, 3];
    } else if (footCirc == 9 && gauge == 5) {
        pattern = [40, 20, 16, 13, 6, 10, 48, 4, 24, 4];
    } else if (footCirc == 9 && gauge == 5.5) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 9 && gauge == 6) {
        pattern = [48, 24, 20, 16, 8, 12, 58, 5, 28, 5];
    } else if (footCirc == 9 && gauge == 6.5) {
        pattern = [52, 26, 22, 17, 8, 13, 62, 6, 28, 5];
    } else if (footCirc == 9 && gauge == 7) {
        pattern = [56, 28, 24, 19, 10, 14, 68, 6, 32, 6];
    } else if (footCirc == 9 && gauge == 7.5) {
        pattern = [60, 30, 26, 20, 10, 15, 72, 7, 32, 6];
    } else if (footCirc == 9 && gauge == 8) {
        pattern = [64, 32, 26, 21, 10, 15, 74, 7, 36, 7];
    } else if (footCirc == 9 && gauge == 8.5) {
        pattern = [68, 34, 28, 23, 12, 16, 80, 8, 36, 7];
    } else if (footCirc == 9 && gauge == 9) {
        pattern = [72, 36, 30, 24, 12, 17, 84, 8, 40, 8];
    } else if (footCirc == 9.5 && gauge == 4) {
        pattern = [34, 17, 14, 11, 5, 9, 42, 3, 22, 3];
    } else if (footCirc == 9.5 && gauge == 4.5) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 3];
    } else if (footCirc == 9.5 && gauge == 5) {
        pattern = [42, 21, 18, 14, 7, 11, 52, 4, 26, 4];
    } else if (footCirc == 9.5 && gauge == 5.5) {
        pattern = [46, 23, 20, 15, 7, 12, 56, 5, 26, 4];
    } else if (footCirc == 9.5 && gauge == 6) {
        pattern = [50, 25, 20, 17, 9, 12, 60, 5, 30, 5];
    } else if (footCirc == 9.5 && gauge == 6.5) {
        pattern = [54, 27, 22, 18, 9, 13, 64, 6, 30, 5];
    } else if (footCirc == 9.5 && gauge == 7) {
        pattern = [60, 30, 26, 20, 10, 15, 72, 7, 32, 6];
    } else if (footCirc == 9.5 && gauge == 7.5) {
        pattern = [64, 32, 26, 21, 10, 15, 74, 7, 36, 7];
    } else if (footCirc == 9.5 && gauge == 8) {
        pattern = [68, 34, 28, 23, 12, 16, 80, 8, 36, 7];
    } else if (footCirc == 9.5 && gauge == 8.5) {
        pattern = [72, 36, 30, 24, 12, 17, 84, 8, 40, 8];
    } else if (footCirc == 9.5 && gauge == 9) {
        pattern = [76, 38, 32, 25, 12, 18, 88, 9, 40, 8];
    } else if (footCirc == 10 && gauge == 4) {
        pattern = [36, 18, 16, 12, 6, 10, 46, 4, 20, 3];
    } else if (footCirc == 10 && gauge == 4.5) {
        pattern = [40, 20, 16, 13, 6, 10, 48, 4, 24, 4];
    } else if (footCirc == 10 && gauge == 5) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 10 && gauge == 5.5) {
        pattern = [50, 25, 20, 17, 9, 12, 60, 5, 30, 5];
    } else if (footCirc == 10 && gauge == 6) {
        pattern = [54, 27, 22, 18, 9, 13, 64, 6, 30, 5];
    } else if (footCirc == 10 && gauge == 6.5) {
        pattern = [58, 29, 24, 19, 9, 14, 68, 6, 34, 6];
    } else if (footCirc == 10 && gauge == 7) {
        pattern = [62, 31, 26, 21, 11, 15, 74, 7, 34, 6];
    } else if (footCirc == 10 && gauge == 7.5) {
        pattern = [68, 34, 28, 23, 12, 16, 80, 8, 36, 7];
    } else if (footCirc == 10 && gauge == 8) {
        pattern = [72, 36, 30, 24, 12, 17, 84, 8, 40, 8];
    } else if (footCirc == 10 && gauge == 8.5) {
        pattern = [76, 38, 32, 25, 12, 18, 88, 9, 40, 8];
    } else if (footCirc == 10 && gauge == 9) {
        pattern = [80, 40, 32, 27, 14, 18, 92, 9, 44, 9];
    } else if (footCirc == 10.5 && gauge == 4) {
        pattern = [38, 19, 16, 13, 7, 10, 48, 4, 22, 3];
    } else if (footCirc == 10.5 && gauge == 4.5) {
        pattern = [42, 21, 18, 14, 7, 11, 52, 4, 26, 4];
    } else if (footCirc == 10.5 && gauge == 5) {
        pattern = [48, 24, 20, 16, 8, 12, 58, 5, 28, 5];
    } else if (footCirc == 10.5 && gauge == 5.5) {
        pattern = [52, 26, 22, 17, 8, 13, 62, 6, 28, 5];
    } else if (footCirc == 10.5 && gauge == 6) {
        pattern = [56, 28, 24, 19, 10, 14, 68, 6, 32, 6];
    } else if (footCirc == 10.5 && gauge == 6.5) {
        pattern = [62, 31, 26, 21, 11, 15, 74, 7, 34, 6];
    } else if (footCirc == 10.5 && gauge == 7) {
        pattern = [66, 33, 28, 22, 11, 16, 78, 7, 38, 7];
    } else if (footCirc == 10.5 && gauge == 7.5) {
        pattern = [70, 35, 30, 23, 11, 17, 82, 8, 38, 7];
    } else if (footCirc == 10.5 && gauge == 8) {
        pattern = [76, 38, 32, 25, 12, 18, 88, 9, 40, 8];
    } else if (footCirc == 10.5 && gauge == 8.5) {
        pattern = [80, 40, 32, 27, 14, 18, 92, 9, 44, 9];
    } else if (footCirc == 10.5 && gauge == 9) {
        pattern = [86, 43, 34, 29, 15, 19, 98, 10, 46, 9];
    } else if (footCirc == 11 && gauge == 4) {
        pattern = [40, 20, 16, 13, 6, 10, 48, 4, 24, 4];
    } else if (footCirc == 11 && gauge == 4.5) {
        pattern = [44, 22, 18, 15, 8, 11, 54, 5, 24, 4];
    } else if (footCirc == 11 && gauge == 5) {
        pattern = [50, 25, 20, 17, 9, 12, 60, 5, 30, 5];
    } else if (footCirc == 11 && gauge == 5.5) {
        pattern = [54, 27, 22, 18, 9, 13, 64, 6, 30, 5];
    } else if (footCirc == 11 && gauge == 6) {
        pattern = [60, 30, 26, 20, 10, 15, 72, 7, 32, 6];
    } else if (footCirc == 11 && gauge == 6.5) {
        pattern = [64, 32, 26, 21, 10, 15, 74, 7, 36, 7];
    } else if (footCirc == 11 && gauge == 7) {
        pattern = [70, 35, 30, 23, 11, 17, 82, 8, 38, 7];
    } else if (footCirc == 11 && gauge == 7.5) {
        pattern = [74, 37, 30, 25, 13, 17, 86, 8, 42, 8];
    } else if (footCirc == 11 && gauge == 8) {
        pattern = [80, 40, 32, 27, 14, 18, 92, 9, 44, 9];
    } else if (footCirc == 11 && gauge == 8.5) {
        pattern = [84, 42, 34, 28, 14, 19, 96, 10, 44, 9];
    } else if (footCirc == 11 && gauge == 9) {
        pattern = [90, 45, 36, 30, 15, 20, 102, 10, 50, 10];
    } else if (footCirc == 11.5 && gauge == 4) {
        pattern = [42, 21, 18, 14, 7, 11, 52, 4, 26, 4];
    } else if (footCirc == 11.5 && gauge == 4.5) {
        pattern = [46, 23, 20, 15, 7, 12, 56, 5, 26, 4];
    } else if (footCirc == 11.5 && gauge == 5) {
        pattern = [52, 26, 22, 17, 8, 13, 62, 6, 28, 5];
    } else if (footCirc == 11.5 && gauge == 5.5) {
        pattern = [56, 28, 24, 19, 10, 14, 68, 6, 32, 6];
    } else if (footCirc == 11.5 && gauge == 6) {
        pattern = [62, 31, 26, 21, 11, 15, 74, 7, 34, 6];
    } else if (footCirc == 11.5 && gauge == 6.5) {
        pattern = [68, 34, 28, 23, 12, 16, 80, 8, 36, 7];
    } else if (footCirc == 11.5 && gauge == 7) {
        pattern = [72, 36, 30, 24, 12, 17, 84, 8, 40, 8];
    } else if (footCirc == 11.5 && gauge == 7.5) {
        pattern = [78, 39, 32, 26, 13, 18, 90, 9, 42, 8];
    } else if (footCirc == 11.5 && gauge == 8) {
        pattern = [84, 42, 34, 28, 14, 19, 96, 10, 44, 9];
    } else if (footCirc == 11.5 && gauge == 8.5) {
        pattern = [86, 43, 34, 29, 15, 19, 98, 10, 46, 9];
    } else if (footCirc == 11.5 && gauge == 9) {
        pattern = [94, 47, 38, 31, 15, 21, 106, 11, 50, 10];

    } else {
        pattern = undefined;
    }

    let sockLength = [];
    if (footLength < 8) {
        (sockLength = footLength - 0.25);
    } else {
        (sockLength = footLength - 0.5);
    }

    let startToe = [];
    if (pattern[0] <= 50) {
        (startToe = sockLength - 1.5);
    } else {
        (startToe = sockLength - 2);
    }

    let textToWrite = pattern ? `<br><h2>Here's your pattern:</h2>
    <br>
    <h4>Cuff</h4>
    <p>Cast on ${pattern[0]} stitches and distribute across needles as you prefer. Mark the beginning of the round and work in ribbing for 1 to 2 inches.</p>
    <br>
    <h4>Leg</h4>
    <p>Continue in stocking stitch or ribbing until the sock leg is the desired length. (See the <a href="#leg-lengths">table of Leg Lengths).</a></p>
    <br>
    <h4>Heel Flap</h4>
    <p>Slip ${pattern[1]} stitches onto one needle to work for heel. Work back and forth in rows as follows:</p>
    <p><strong>Heel flap row 1:</strong> (RS) Knit ${pattern[1]}, turn work.</p>
    <p><strong>Heel flap row 2:</strong> (WS) Slip 1 purlwise with yarn in front, purl to end of heel stitches, turn work.</p>
    <p><strong>Heel flap row 3:</strong> (RS) Slip 1 knitwise with yarn in back, knit to end of heel stitches, turn work.</p>
    <p><strong>Heel flap row 4:</strong> (WS) Slip 1 purlwise with yarn in front, purl to end of heel stitches, turn work.</p>
    <p>Repeat rows 3 and 4 until ${pattern[2]} heel rows have been worked.</p>
    <br>
    <h4>Heel Turn</h4>
    <p>Beginning with a right-side row, short-rows are used to form the heel.</p>
    <p><strong>Heel turn row 1:</strong> (RS) Knit ${pattern[3]}, ssk, turn work.</p>
    <p><strong>Heel turn row 2:</strong> (WS) Sl 1 purlwise with yarn in front, purl ${pattern[4]}, p2tog, turn work.</p> 
    <p><strong>Heel turn row 3:</strong> (RS) Sl 1 purlwise with yarn in back, knit ${pattern[4]}, ssk, turn work.</p>
    <p><strong>Heel turn row 4:</strong> (WS) Sl 1 purlwise with yarn in front, purl ${pattern[4]}, p2tog, turn work.</p>
    <p>Repeat heel turn rows 3 and 4 until all heel stitches have been worked, ending having worked a wrong-side row (${pattern[4]} + 2 stitches remain).</p>
    <p>With RS facing, knit remaining heel stiches.</p>
    <br>
    <h4>Gusset Decreases</h4> 
    <p>With right side facing and working under both legs of each slipped selvedge stitch, pick up and knit ${pattern[5]} stiches along the first side of the heel flap, picking up the last 2 stitches above the break between the heel and instep stitches.</p> 
    <p>Work across the instep stitches.</p>
    <p>With RS still facing, pick up and knit ${pattern[5]} stitches along the other side of the heel flap, picking up the first 2 stitches above the break between the heel and instep as before, then use the same needle the knit of the remaining heel stitches again. ${[pattern[6]]} stitches total.</p>
    <p>The rounds now begin in the centre of the heel stitches. Place a marker.</p>
    <p><strong>Gusset round 1:</strong> Knit to the end of the heel stitches, knit all picked-up stitches through the back loop to twist them, work across instep stitches in pattern as desired, knit all picked-up stitches through the back loop, knit to end of round.</p>
    <p><strong>Gusset round 2:</strong> (decrease round) Knit to 3 stitches before start of instep, k2tog, k1; work across instep stitches; k1, ssk, knit to end of round.</p>
    <p><strong>Gusset round 3:</strong> Knit.</p>
    <p>Repeat gusset rounds 2 and 3 until ${pattern[0]} stitches remain.</p>
    <br>
    <h4>Foot</h4>
    <p>Work until the foot is ${startToe} inches long.</p>
    <br>
    <h4>Toe</h4>
    <p><strong>Toe round 1:</strong> (decrease round) Knit to 3 stitches before instep, k2tog, k2, ssk, knit to 3 stitches before end of instep, k2tog, k2, ssk, knit to end of round - 4 stitches decreased.</p> 
    <p><strong>Toe round 2:</strong> Knit even.</p>
    <p>Repeat these 2 rounds ${pattern[7]} times - ${pattern[8]} stitches remain.</p> 
    <p>Repeat toe round 1 every round (i.e. decrease every round) ${pattern[9]} times - 8 or 10 stitches remain depending on the number of stitches you cast on.</p> 
    <br>
    <h4>Finishing</h4>
    <p>Cut yarn, leaving an 8 inch tail. Thread tail on a tapestry needle, draw through remaining stitches, pull tight to close hole and secure to wrong side.</p> 
    <p>Weave in loose ends.</p>` :
    "<p>Sorry, we don't seem to have a pattern that matches those measurements.</p>";

    document.getElementById("patternDiv").innerHTML = textToWrite;

}