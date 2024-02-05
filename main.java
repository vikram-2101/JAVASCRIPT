jimport java.util.*;

public class main {
    public static void main(String[] args) {
        String s = "Thi's is a sentence";
        String[] words = s.split("\\s+");
        StringBuilder sb = new StringBuilder();
        String ans = "";

        for (String word : words) {
            ans += sb.append(word);
        }
        System.out.println(ans);
    }

}
