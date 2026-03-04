import java.util.*;

public class SelectionSort {
    static void select (int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min_indx = i;
            for (int j = i + 1; j < n; j++) {
               if (arr[j] < arr[min_indx]) {
                   min_indx = j;
               }
            }


            int temp = arr[i];
            arr[i] = arr[min_indx];
            arr[min_indx] = temp;
        }

    }

    public static void main(String[] args) {
        int[] arr = {1,3,8,9,0,2,5};
        select(arr);
        for (int item : arr) {
            System.out.print(item + " ");
        }
    }
}
