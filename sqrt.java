import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class sqrt {
    public static void main(String[] args) {
        int nums[] = { -1, -2, -3 };
        int ans = boom(nums);
        System.out.println(ans);

    }

    static int boom(int[] nums) {
        int ans = 1;
        int count = 1;
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {

            count++;
            ans *= nums[i];
        }
        if (count == 3) {
            return ans;
        }
        return -1;
    }
}