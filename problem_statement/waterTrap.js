waterTrap = function (height) {
    let n = height.length;
    let result = 0;

    let max_l = 0, max_r = 0, lo = 0, hi = n - 1;
    while (lo <= hi) {
        if (height[lo] < height[hi]) {
            if (height[lo] > max_l) {
                max_l = height[lo];
            }
            else {
                result += max_l - height[lo];
            }
            lo++;
        } else {
            if (height[hi] > max_r) {
                max_r = height[hi];
            } else {
                result += max_r - height[hi];
            }
            hi--;
        }
    }

    return result;
}

var height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(waterTrap(height1));
var height2 = [4, 2, 0, 3, 2, 5];
console.log(waterTrap(height2));