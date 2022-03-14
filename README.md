# activities

<ins>Invoice</ins>

![invoice1](https://github.com/chirag2506/activities/blob/main/images/invoice1.png)
![invoice2](https://github.com/chirag2506/activities/blob/main/images/invoice2.png)

<ins>Problem Statement</ins>

<ins>Water Trap</ins>

Approach: For every block, the amount of water above that block is equal to difference between its height and minimum of highest block on either of its side (provided that there is atleast one block on both side of height > 0). Basically, 
height_of_water(block) = min(height(tallest_block_on_left_of_it), height(tallest_block_on_right_of_it)) - height(block)

This could be done by storing tallest block on left of right of each block in separate arrays in one traversal. This solution requires O(n) time and O(n) space.
In my approach, I have further optimized the algorithm by reducing O(n) space to O(1) space by using two variables which store maximum height on both sides till that particular block and then using that to get height_of_water(block).

<ins>Fast API</ins>

To run, first run the following commands in terminal:
pip install -r requirements.txt
uvicorn main:app