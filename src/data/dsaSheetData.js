export const dsaSheetData = [
  {
    topicId: 'arrays',
    topicName: 'Arrays & Hashing',
    badge: 'Foundation',
    description: 'Master linear data structures, hash maps, prefix sums, and two-pointer techniques.',
    problems: [
      {
        id: 'dsa-1',
        title: 'Two Sum',
        difficulty: 'Easy',
        acceptance: '53.6%',
        link: 'https://leetcode.com/problems/two-sum/',
        companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Meta'],
        description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. Each input has exactly one solution, and you may not use the same element twice.',
        example: 'Input: nums = [2,7,11,15], target = 9\nOutput: [0,1] (Because nums[0] + nums[1] == 9)',
        intuition: 'Instead of checking all pairs with O(N^2) brute force, use a Hash Map to store the complement (target - currentNum) and its index. As we iterate through the array, if the current number is already in the map as a needed complement, we found our pair in O(N) time.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)',
        solutions: {
          cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); ++i) {
            int complement = target - nums[i];
            if (seen.find(complement) != seen.end()) {
                return {seen[complement], i};
            }
            seen[nums[i]] = i;
        }
        return {};
    }
};`,
          java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[] { seen.get(complement), i };
            }
            seen.put(nums[i], i);
        }
        return new int[0];
    }
}`,
          python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []`
        }
      },
      {
        id: 'dsa-2',
        title: 'Best Time to Buy and Sell Stock',
        difficulty: 'Easy',
        acceptance: '54.1%',
        link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
        companies: ['Amazon', 'Microsoft', 'Google', 'Goldman Sachs'],
        description: 'You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit.',
        example: 'Input: prices = [7,1,5,3,6,4]\nOutput: 5 (Buy on day 2 at price 1, sell on day 5 at price 6, profit = 6 - 1 = 5)',
        intuition: 'Maintain a running minimum price seen so far. At each day, calculate profit if sold today (current price - minPrice). Update maxProfit if this profit is greater than current max.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
        solutions: {
          cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;
        for (int p : prices) {
            minPrice = min(minPrice, p);
            maxProfit = max(maxProfit, p - minPrice);
        }
        return maxProfit;
    }
};`,
          java: `class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int p : prices) {
            minPrice = Math.min(minPrice, p);
            maxProfit = Math.max(maxProfit, p - minPrice);
        }
        return maxProfit;
    }
}`,
          python: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        for p in prices:
            min_price = min(min_price, p)
            max_profit = max(max_profit, p - min_price)
        return max_profit`
        }
      },
      {
        id: 'dsa-3',
        title: 'Maximum Subarray (Kadane’s Algorithm)',
        difficulty: 'Medium',
        acceptance: '51.3%',
        link: 'https://leetcode.com/problems/maximum-subarray/',
        companies: ['Microsoft', 'Amazon', 'Google', 'LinkedIn'],
        description: 'Given an integer array `nums`, find the subarray with the largest sum, and return its sum.',
        example: 'Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6 (The subarray [4,-1,2,1] has the largest sum = 6)',
        intuition: 'Kadane’s algorithm iterates through the array. At each index, decide whether to add the current element to the ongoing subarray sum or start a fresh new subarray starting at the current element. If current sum becomes negative, it won\'t help subsequent subarrays, so reset or take max.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
        solutions: {
          cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int currentSum = 0;
        int maxSum = nums[0];
        for (int x : nums) {
            currentSum = max(x, currentSum + x);
            maxSum = max(maxSum, currentSum);
        }
        return maxSum;
    }
};`,
          java: `class Solution {
    public int maxSubArray(int[] nums) {
        int currentSum = 0;
        int maxSum = nums[0];
        for (int x : nums) {
            currentSum = Math.max(x, currentSum + x);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}`,
          python: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        cur_sum = 0
        max_sum = nums[0]
        for x in nums:
            cur_sum = max(x, cur_sum + x)
            max_sum = max(max_sum, cur_sum)
        return max_sum`
        }
      },
      {
        id: 'dsa-4',
        title: 'Trapping Rain Water',
        difficulty: 'Hard',
        acceptance: '62.0%',
        link: 'https://leetcode.com/problems/trapping-rain-water/',
        companies: ['Google', 'Amazon', 'Meta', 'Goldman Sachs', 'Bloomberg'],
        description: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
        example: 'Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6',
        intuition: 'At each bar, trapped water is determined by min(maxLeft, maxRight) - currentHeight. Using two pointers from left and right inward, we can track leftMax and rightMax without auxiliary prefix/suffix arrays in O(1) space.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
        solutions: {
          cpp: `class Solution {
public:
    int trap(vector<int>& height) {
        int l = 0, r = height.size() - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        while (l < r) {
            if (height[l] < height[r]) {
                if (height[l] >= leftMax) leftMax = height[l];
                else water += leftMax - height[l];
                l++;
            } else {
                if (height[r] >= rightMax) rightMax = height[r];
                else water += rightMax - height[r];
                r--;
            }
        }
        return water;
    }
};`,
          java: `class Solution {
    public int trap(int[] height) {
        int l = 0, r = height.length - 1;
        int leftMax = 0, rightMax = 0, water = 0;
        while (l < r) {
            if (height[l] < height[r]) {
                if (height[l] >= leftMax) leftMax = height[l];
                else water += leftMax - height[l];
                l++;
            } else {
                if (height[r] >= rightMax) rightMax = height[r];
                else water += rightMax - height[r];
                r--;
            }
        }
        return water;
    }
}`,
          python: `class Solution:
    def trap(self, height: List[int]) -> int:
        l, r = 0, len(height) - 1
        left_max = right_max = water = 0
        while l < r:
            if height[l] < height[r]:
                if height[l] >= left_max:
                    left_max = height[l]
                else:
                    water += left_max - height[l]
                l += 1
            else:
                if height[r] >= right_max:
                    right_max = height[r]
                else:
                    water += right_max - height[r]
                r -= 1
        return water`
        }
      }
    ]
  },
  {
    topicId: 'strings',
    topicName: 'Strings & Two Pointers',
    badge: 'Core',
    description: 'Palindromes, anagrams, substring sliding windows, and string matching.',
    problems: [
      {
        id: 'dsa-5',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Medium',
        acceptance: '35.4%',
        link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
        companies: ['Amazon', 'Google', 'Microsoft', 'Adobe', 'Meta'],
        description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
        example: 'Input: s = "abcabcbb"\nOutput: 3 (The answer is "abc", with the length of 3)',
        intuition: 'Use a sliding window with two pointers `left` and `right`. Maintain a hash map of character -> last seen index. If current character is already in window, slide `left` to lastSeen[char] + 1.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(min(N, alphabetSize))',
        solutions: {
          cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> last(256, -1);
        int maxLen = 0, left = 0;
        for (int right = 0; right < s.length(); ++right) {
            if (last[s[right]] >= left) {
                left = last[s[right]] + 1;
            }
            last[s[right]] = right;
            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};`,
          java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int maxLen = 0, left = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c)) {
                left = Math.max(left, map.get(c) + 1);
            }
            map.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`,
          python: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        max_len = left = 0
        for right, ch in enumerate(s):
            if ch in char_map and char_map[ch] >= left:
                left = char_map[ch] + 1
            char_map[ch] = right
            max_len = max(max_len, right - left + 1)
        return max_len`
        }
      },
      {
        id: 'dsa-6',
        title: 'Group Anagrams',
        difficulty: 'Medium',
        acceptance: '68.9%',
        link: 'https://leetcode.com/problems/group-anagrams/',
        companies: ['Amazon', 'Apple', 'Google', 'Uber'],
        description: 'Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.',
        example: 'Input: strs = ["eat","tea","tan","ate","nat","bat"]\nOutput: [["bat"],["nat","tan"],["ate","eat","tea"]]',
        intuition: 'Anagrams share identical character counts or sorted string representations. Sort each string as a canonical key for a hash map whose values are arrays of original words.',
        timeComplexity: 'O(N * K log K) where K is max string length',
        spaceComplexity: 'O(N * K)',
        solutions: {
          cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> groups;
        for (const string& s : strs) {
            string key = s;
            sort(key.begin(), key.end());
            groups[key].push_back(s);
        }
        vector<vector<string>> result;
        for (auto& pair : groups) {
            result.push_back(pair.second);
        }
        return result;
    }
};`,
          java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] arr = s.toCharArray();
            Arrays.sort(arr);
            String key = String.valueOf(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }
}`,
          python: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = collections.defaultdict(list)
        for s in strs:
            key = "".join(sorted(s))
            groups[key].append(s)
        return list(groups.values())`
        }
      }
    ]
  },
  {
    topicId: 'linkedlist',
    topicName: 'Linked Lists',
    badge: 'Pointers',
    description: 'Fast and slow pointers, list reversal, cycle detection, and merge routines.',
    problems: [
      {
        id: 'dsa-7',
        title: 'Reverse Linked List',
        difficulty: 'Easy',
        acceptance: '76.8%',
        link: 'https://leetcode.com/problems/reverse-linked-list/',
        companies: ['Microsoft', 'Amazon', 'Google', 'Apple'],
        description: 'Given the `head` of a singly linked list, reverse the list, and return the reversed list.',
        example: 'Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]',
        intuition: 'Maintain three pointers: prev (initially NULL), curr (initially head), and next. In each step, save curr->next, redirect curr->next to prev, advance prev to curr, and advance curr to next.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
        solutions: {
          cpp: `class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
};`,
          java: `class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
}`,
          python: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        return prev`
        }
      },
      {
        id: 'dsa-8',
        title: 'Linked List Cycle (Floyd’s Tortoise & Hare)',
        difficulty: 'Easy',
        acceptance: '50.1%',
        link: 'https://leetcode.com/problems/linked-list-cycle/',
        companies: ['Amazon', 'Microsoft', 'Spotify', 'Goldman Sachs'],
        description: 'Given `head`, the head of a linked list, determine if the linked list has a cycle in it.',
        example: 'Input: head = [3,2,0,-4], pos = 1 (tail connects to node index 1)\nOutput: true',
        intuition: 'Use Floyd\'s Cycle Detection with two pointers: slow moves 1 step, fast moves 2 steps. If a cycle exists, fast will eventually lap and meet slow inside the loop.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(1)',
        solutions: {
          cpp: `class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) return true;
        }
        return false;
    }
};`,
          java: `public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }
}`,
          python: `class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        return False`
        }
      }
    ]
  },
  {
    topicId: 'trees',
    topicName: 'Binary Trees & BST',
    badge: 'High Frequency',
    description: 'Tree traversals (Inorder, Preorder, Postorder, BFS Level-order), LCA, and BST properties.',
    problems: [
      {
        id: 'dsa-9',
        title: 'Lowest Common Ancestor of a Binary Tree',
        difficulty: 'Medium',
        acceptance: '62.4%',
        link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
        companies: ['Amazon', 'Facebook', 'Microsoft', 'Google', 'Apple'],
        description: 'Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`.',
        example: 'Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\nOutput: 3',
        intuition: 'Traverse recursively. If current node is null, or matches p or q, return current node. Recursively search left and right subtrees. If both left and right return non-null, current node is the LCA!',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(H) where H is tree height',
        solutions: {
          cpp: `class Solution {
public:
    ListNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (!root || root == p || root == q) return root;
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        if (left && right) return root;
        return left ? left : right;
    }
};`,
          java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left != null && right != null) return root;
        return left != null ? left : right;
    }
}`,
          python: `class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root == p or root == q:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if left and right:
            return root
        return left if left else right`
        }
      },
      {
        id: 'dsa-10',
        title: 'Binary Tree Level Order Traversal',
        difficulty: 'Medium',
        acceptance: '67.8%',
        link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
        companies: ['Amazon', 'Bloomberg', 'LinkedIn', 'Microsoft'],
        description: 'Given the `root` of a binary tree, return the level order traversal of its nodes\' values (i.e., from left to right, level by level).',
        example: 'Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]',
        intuition: 'Use a Queue for Breadth-First Search (BFS). At each level, determine the number of elements in the queue (levelSize), dequeue that exact count, append to the current level array, and push their children.',
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)',
        solutions: {
          cpp: `class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> res;
        if (!root) return res;
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            int sz = q.size();
            vector<int> level;
            for (int i = 0; i < sz; ++i) {
                TreeNode* node = q.front(); q.pop();
                level.push_back(node->val);
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            res.push_back(level);
        }
        return res;
    }
};`,
          java: `class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = q.poll();
                level.add(node.val);
                if (node.left != null) q.offer(node.left);
                if (node.right != null) q.offer(node.right);
            }
            res.add(level);
        }
        return res;
    }
}`,
          python: `class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        res = []
        q = collections.deque([root])
        while q:
            level = []
            for _ in range(len(q)):
                node = q.popleft()
                level.append(node.val)
                if node.left: q.append(node.left)
                if node.right: q.append(node.right)
            res.append(level)
        return res`
        }
      }
    ]
  },
  {
    topicId: 'graphs',
    topicName: 'Graphs & BFS / DFS',
    badge: 'High Frequency',
    description: 'Grid traversals, topological sort, cycle detection, and shortest paths.',
    problems: [
      {
        id: 'dsa-11',
        title: 'Number of Islands',
        difficulty: 'Medium',
        acceptance: '59.2%',
        link: 'https://leetcode.com/problems/number-of-islands/',
        companies: ['Amazon', 'Google', 'Bloomberg', 'Microsoft'],
        description: 'Given an `m x n` 2D binary grid `grid` which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.',
        example: 'Input: grid = [["1","1","0"],["1","1","0"],["0","0","1"]]\nOutput: 2',
        intuition: 'Iterate through every cell in the grid. When an unvisited \'1\' is encountered, increment island count and initiate a DFS or BFS to sink the entire island (turn connected \'1\'s to \'0\'s or mark as visited).',
        timeComplexity: 'O(M * N)',
        spaceComplexity: 'O(M * N) in worst case recursion stack',
        solutions: {
          cpp: `class Solution {
public:
    void dfs(vector<vector<char>>& grid, int r, int c) {
        if (r < 0 || c < 0 || r >= grid.size() || c >= grid[0].size() || grid[r][c] != '1') return;
        grid[r][c] = '0';
        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }
    int numIslands(vector<vector<char>>& grid) {
        int count = 0;
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[0].size(); ++j) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(grid, i, j);
                }
            }
        }
        return count;
    }
};`,
          java: `class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(grid, i, j);
                }
            }
        }
        return count;
    }
    private void dfs(char[][] grid, int r, int c) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] != '1') return;
        grid[r][c] = '0';
        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }
}`,
          python: `class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid: return 0
        rows, cols = len(grid), len(grid[0])
        count = 0
        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
                return
            grid[r][c] = '0'
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    count += 1
                    dfs(r, c)
        return count`
        }
      }
    ]
  },
  {
    topicId: 'dp',
    topicName: 'Dynamic Programming',
    badge: 'Advanced',
    description: 'Subproblems, memoization, bottom-up tabulation, 1D and 2D state transitions.',
    problems: [
      {
        id: 'dsa-12',
        title: 'Coin Change',
        difficulty: 'Medium',
        acceptance: '44.3%',
        link: 'https://leetcode.com/problems/coin-change/',
        companies: ['Amazon', 'Microsoft', 'Goldman Sachs', 'Google'],
        description: 'You are given an integer array `coins` representing coins of different denominations and an integer `amount`. Return the fewest number of coins that you need to make up that amount. If impossible, return -1.',
        example: 'Input: coins = [1,2,5], amount = 11\nOutput: 3 (11 = 5 + 5 + 1)',
        intuition: 'Bottom-up DP: Let dp[i] be the minimum coins needed for amount i. Base case: dp[0] = 0. For each amount from 1 to total, try each coin c: if i - c >= 0, dp[i] = min(dp[i], dp[i - c] + 1).',
        timeComplexity: 'O(Amount * len(Coins))',
        spaceComplexity: 'O(Amount)',
        solutions: {
          cpp: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; ++i) {
            for (int c : coins) {
                if (i - c >= 0) {
                    dp[i] = min(dp[i], dp[i - c] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
};`,
          java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int c : coins) {
                if (i - c >= 0) {
                    dp[i] = Math.min(dp[i], dp[i - c] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}`,
          python: `class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        for i in range(1, amount + 1):
            for c in coins:
                if i - c >= 0:
                    dp[i] = min(dp[i], dp[i - c] + 1)
        return dp[amount] if dp[amount] != float('inf') else -1`
        }
      }
    ]
  }
];
