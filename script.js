/* ═══════════════════════════════════════════════════════
   ANGELEANS PIRATE — ALGORITHM ARCHIPELAGO
   script.js
═══════════════════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════════════════════
   DATA — CREW
════════════════════════════════════════════════════════ */

const CREW_DATA = [
  {
    emoji: '🏴‍☠️',
    name: 'Lance Ocampo',
    role: 'The Captain',
    bio: 'The fearless leader of the Angelean expedition, Lance charts the course through treacherous algorithmic waters with courage and wisdom.',
    duties: [
      "Commands the crew and sets the mission strategy",
      "Ensures every algorithm is mastered before moving forward",
      "Makes final decisions on course corrections",
      "Bears full responsibility for the crew's success"
    ]
  },
  {
    emoji: '🗡️',
    name: 'Juliana Kate Lacsina',
    role: 'First Mate',
    bio: 'Second-in-command and the backbone of discipline aboard the ship. Juliana keeps the crew sharp and ensures no treasure is left unclaimed.',
    duties: [
      "Assists the Captain in all strategic decisions",
      "Maintains crew morale and motivation",
      "Coordinates task assignments between crew members",
      "Keeps detailed logs of every algorithm conquered"
    ]
  },
  {
    emoji: '🧭',
    name: 'Erin Venize Timbol',
    role: 'Navigator',
    bio: 'Erin reads the stars and the seas, guiding the ship safely through the Midterm Isles and the treacherous Perilous Crossing to the Finals Coast.',
    duties: [
      "Plans optimal routes between treasure locations",
      "Interprets map coordinates and algorithm complexity",
      "Warns the crew of difficult passages ahead",
      "Ensures efficient traversal of the Archipelago"
    ]
  },
  {
    emoji: '⚓',
    name: 'Kyle Contreras',
    role: 'Cartographer',
    bio: "The mapmaker and scholar of the crew. Kyle documents every island, every algorithm, and every discovery — turning knowledge into charts that will guide future sailors.",
    duties: [
      "Draws and maintains the Algorithm Archipelago map",
      "Records definitions and examples for all 42 algorithms",
      "Marks discovered treasures and updates the crew's progress",
      "Ensures the map's accuracy for future expeditions"
    ]
  }
];

/* ════════════════════════════════════════════════════════
   DATA — ALGORITHMS
════════════════════════════════════════════════════════ */

const ALGOS = [
  {
    id: 1, name: "Euclid's Algorithm", mid: true,
    def: "An iterative or recursive method for computing the Greatest Common Divisor (GCD) of two integers. It operates on the principle that the GCD of two numbers also divides their difference. By repeatedly replacing the larger number with the remainder of its division by the smaller number, the algorithm reduces the problem size logarithmically until the remainder is zero.",
    ex: "Tile Flooring Design: A contractor is flooring a 1071 cm x 462 cm rectangular ballroom. The client demands large, uniform square tiles with absolutely no cutting or grout gaps. The contractor must find the largest possible tile size that divides both dimensions perfectly. By applying Euclid's Algorithm, they divide 1071 by 462 to find the remainder, repeating until they hit 21 cm.",
    answer: { type: 'multi', fields: [{ label: 'Tile size (cm)', val: '21', key: 'tile' }, { label: 'Number of tiles (total)', val: '1122', key: 'count' }] }
  },
  {
    id: 2, name: "Consecutive Integer Check", mid: true,
    def: "A brute-force approach to finding the GCD by testing potential divisors in descending order. Starting from t equal to min(m, n), the algorithm checks if t divides both m and n with zero remainder. If not, it decrements t by 1 and repeats. While conceptually simple, its worst-case efficiency is linear, making it significantly slower than Euclid's method for large integers.",
    ex: "Estate Distribution: An estate executor must distribute 48 vintage watches and 72 rare coins equally among heirs with nothing left over. To find the maximum number of heirs possible, the executor starts by checking if 48 works, then 47, then 46, eventually reaching the first number that divides both piles evenly.",
    answer: { type: 'multi', fields: [{ label: 'Maximum number of heirs', val: '24', key: 'heirs' }, { label: 'Watches per heir', val: '2', key: 'watches' }, { label: 'Coins per heir', val: '3', key: 'coins' }] }
  },
  {
    id: 3, name: "Prime Factorization GCD", mid: true,
    def: "A number-theoretic approach that finds the GCD by decomposing two integers into their prime factors. The GCD is then determined by taking the product of the lowest power of every common prime factor. While intuitive, this method is computationally expensive because integer factorization is a difficult problem as numbers grow large.",
    ex: "Gear Synchronization: A clockmaker is restoring a complex astronomical clock with two interlocking gears: one with 120 teeth and another with 150. To calculate the gear ratio needed to synchronize them, the maker breaks 120 down to 2 cubed times 3 times 5, and 150 to 2 times 3 times 5 squared, then identifies the shared factors to find the GCD.",
    answer: { type: 'multi', fields: [{ label: 'GCD of 120 and 150', val: '30', key: 'gcd' }, { label: '120 divided by GCD', val: '4', key: 'ratio1' }, { label: '150 divided by GCD', val: '5', key: 'ratio2' }] }
  },
  {
    id: 4, name: "Sieve of Eratosthenes", mid: true,
    def: "An ancient and highly efficient algorithm for finding all prime numbers up to a limit n. It works by creating a list of integers and systematically sieving out the multiples of each prime starting from 2. Because it avoids trial division for every single number, it is the standard method for generating prime tables.",
    ex: "Prime Employee IDs: A cybersecurity firm assigns unique identification numbers to employees, but for encryption purposes every ID must be a prime number. Rather than testing each individual number from 1 to 10000 for primality, the IT department creates a grid and crosses out every multiple of 2, then 3, then 5, leaving a ready-made master list of valid prime IDs.",
    answer: { type: 'single', val: '1229', label: 'Prime IDs available (primes up to 10000)' }
  },
  {
    id: 5, name: "Sequential Search", mid: true,
    def: "The most basic search algorithm, also known as Linear Search. It traverses a data structure from the first element to the last, comparing each element with the target value until a match is found or the end is reached. It requires no prior sorting and has a worst-case time complexity of O(n).",
    ex: "Patient File Search: A small medical clinic stores 200 physical patient charts organized by date of first visit, not alphabetically. A nurse needs to find the file for John Doe. With no ordering to exploit, the nurse starts at the very first folder and checks every single name tag one by one until John Doe's folder appears.",
    answer: { type: 'multi', fields: [{ label: 'Total charts (n)', val: '200', key: 'n' }, { label: 'Worst-case comparisons', val: '200', key: 'worst' }, { label: 'Best-case comparisons', val: '1', key: 'best' }, { label: 'Average comparisons', val: '100', key: 'avg' }] }
  },
  {
    id: 6, name: "Sequential Algorithm", mid: true,
    def: "A fundamental computational structure where instructions are executed in a strict, linear chronological order. Each step must complete before the next begins, and the flow of logic never branches or repeats. It represents the simplest form of a deterministic process where the input-to-output path is a straight line.",
    ex: "Automated Car Wash: A car wash is programmed with a rigid controller. The vehicle must first be sprayed with soap, then scrubbed by brushes, then rinsed, and finally dried. If the system tried to dry the car before the soap was rinsed off, the process would fail. Step B cannot trigger until step A is 100 percent complete.",
    answer: { type: 'multi', fields: [{ label: 'Total sequential steps', val: '4', key: 'steps' }, { label: 'Step at which scrubbing occurs', val: '2', key: 'scrub' }, { label: 'Step at which rinsing occurs', val: '3', key: 'rinse' }, { label: 'Step at which drying occurs', val: '4', key: 'dry' }] }
  },
  {
    id: 7, name: "Nonrecursive Max/Unique", mid: true,
    def: "An iterative approach to data analysis that uses a single loop to process a collection. To find a maximum, it maintains a current best variable, updating it whenever a larger value is encountered. By avoiding recursion, it conserves stack memory and prevents stack overflow errors in large datasets.",
    ex: "Heaviest Package Scan: A high-speed conveyor belt at a shipping hub carries 5000 boxes. As each box passes, a program compares the box's weight to the highest recorded weight in memory. If the new box is heavier, the record is replaced. The task completes in one continuous scan.",
    answer: { type: 'multi', fields: [{ label: 'Total boxes scanned', val: '5000', key: 'scanned' }, { label: 'Comparisons performed', val: '4999', key: 'comparisons' }, { label: 'Number of passes required', val: '1', key: 'passes' }] }
  },
  {
    id: 8, name: "Recursive Factorial", mid: true,
    def: "A classic example of functional programming where a function calls itself to solve a smaller instance of the same problem. The factorial of n is defined by the base case 0 factorial equals 1 and the recursive step n times (n minus 1) factorial. Each call is added to the system call stack until the base case is reached, at which point values bubble up to produce the final product.",
    ex: "Menu Permutations: A restaurant manager wants to know how many ways they can arrange 5 different dishes on a Daily Special rotation. They use recursive logic: to arrange 5 dishes, pick one, then multiply by the ways to arrange the remaining 4, breaking it down until one dish remains.",
    answer: { type: 'multi', fields: [{ label: 'Total dish arrangements (5 factorial)', val: '120', key: 'result' }, { label: 'Recursive calls made', val: '5', key: 'calls' }, { label: 'Base case value (0 factorial)', val: '1', key: 'base' }] }
  },
  {
    id: 9, name: "Tower of Hanoi", mid: true,
    def: "A mathematical puzzle and recursive algorithm used to demonstrate the Divide and Conquer strategy. To move n disks, the algorithm moves n minus 1 disks to an auxiliary peg, moves the largest disk to the destination, and then moves the n minus 1 disks from the auxiliary to the destination. The number of moves required grows exponentially as 2 to the power n minus 1.",
    ex: "Backup Tape Rotation: A data center uses a Hanoi-style backup rotation across 3 tape levels to manage limited storage: yesterday's backup (small disk), last week's (medium disk), and last month's (large disk). Following Tower of Hanoi logic ensures long-term archives stay protected while recent backups rotate efficiently.",
    answer: { type: 'multi', fields: [{ label: 'Number of tape levels (disks)', val: '3', key: 'disks' }, { label: 'Minimum moves required', val: '7', key: 'moves' }, { label: 'Formula result (2 to the 3 minus 1)', val: '7', key: 'formula' }] }
  },
  {
    id: 10, name: "Exponentiation", mid: true,
    def: "The process of raising a base to a power. While basic exponentiation uses n minus 1 multiplications, the Square-and-Multiply algorithm (Binary Exponentiation) reduces this to O(log n) operations by squaring the base and only multiplying when the corresponding bit in the binary representation of the exponent is 1.",
    ex: "Compound Interest Flash Loan: A fintech app compounds interest every second. For a one-year loan spanning 31536000 seconds, calculating interest by multiplying the rate 31536000 times would be too slow. Binary exponentiation skips through the powers and completes the same calculation in just 25 multiplications.",
    answer: { type: 'multi', fields: [{ label: 'Seconds in one year', val: '31536000', key: 'seconds' }, { label: 'Multiplications with binary exponentiation', val: '25', key: 'mults' }, { label: 'Multiplications with naive method', val: '31535999', key: 'naive' }] }
  },
  {
    id: 11, name: "Selection Sort", mid: true,
    def: "An in-place comparison sort that divides the input into a sorted and an unsorted region. It repeatedly selects the smallest element from the unsorted section and swaps it with the leftmost unsorted element. Its O(n squared) complexity makes it inefficient for large lists, but it is known for simplicity and minimal memory swap requirements.",
    ex: "Fruit Basket Arrangement: An artisan vendor has 10 apples of different sizes. To arrange them from smallest to largest, they scan the entire pile to find the single smallest apple and place it at the front, then repeat for the remaining pile until all apples are perfectly ordered.",
    answer: { type: 'multi', fields: [{ label: 'Number of apples (n)', val: '10', key: 'n' }, { label: 'Total comparisons', val: '45', key: 'comparisons' }, { label: 'Total swaps (maximum)', val: '9', key: 'swaps' }] }
  },
  {
    id: 12, name: "Bubble Sort", mid: true,
    def: "A simple sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order. This pass-through is repeated until the list is sorted. The algorithm gets its name because smaller or larger elements bubble to their correct position with each iteration.",
    ex: "Height Line-Up: A kindergarten teacher needs to line up 20 students by height for a class photo. The teacher walks down the line repeatedly, swapping any adjacent pair that is out of order. The tallest students gradually bubble toward the back until everyone is perfectly ordered.",
    answer: { type: 'multi', fields: [{ label: 'Number of students (n)', val: '20', key: 'n' }, { label: 'Worst-case passes', val: '19', key: 'passes' }, { label: 'Worst-case total comparisons', val: '190', key: 'comparisons' }] }
  },
  {
    id: 13, name: "Brute Force", mid: true,
    def: "A straightforward, exhaustive search approach that relies on sheer computing power rather than sophisticated logic. It tries every possible candidate for a solution until it finds one that satisfies the problem's constraints. It is the most reliable method but often the most inefficient, particularly for problems with a high number of combinations.",
    ex: "Forgotten Lock Combination: You have forgotten your 3-digit gym locker combination. There are 1000 possible codes from 000 to 999. Without any clues or smart shortcuts, you try every single one starting from 000, incrementing one at a time, until the lock opens.",
    answer: { type: 'multi', fields: [{ label: 'Total possible combinations', val: '1000', key: 'total' }, { label: 'Combination that opens the lock', val: '742', key: 'answer' }, { label: 'Maximum attempts needed', val: '1000', key: 'worst' }] }
  },
  {
    id: 14, name: "Brute-Force String Matching", mid: true,
    def: "A text-searching algorithm that finds a pattern within a larger body of text by sliding the pattern across the text one character at a time. At each position it checks if the characters of the pattern match. If a mismatch occurs, it shifts the pattern exactly one position to the right and restarts the comparison.",
    ex: "DNA Marker Search: A geneticist searches through a DNA sequence of 1000000 base pairs to find the 7-letter disease marker GATTACA. The program starts at the first letter and attempts to match one character at a time, shifting one spot right on any mismatch.",
    answer: { type: 'multi', fields: [{ label: 'Pattern length (characters)', val: '7', key: 'pattern' }, { label: 'Text length (base pairs)', val: '1000000', key: 'text' }, { label: 'Worst-case total comparisons', val: '6999958', key: 'comparisons' }] }
  },
  {
    id: 15, name: "Brute-Force Closest-Pair", mid: true,
    def: "An algorithm used to find the two points in a set that are the shortest distance apart. In the brute-force version, the algorithm calculates the Euclidean distance between every possible pair of points and keeps track of the minimum distance found. This results in an O(n squared) time complexity.",
    ex: "Aircraft Collision Detection: An air traffic control system monitors 50 aircraft in a crowded flight corridor. To prevent mid-air collisions, the system must constantly identify which two planes are closest to each other, calculating the distance between every possible pair.",
    answer: { type: 'multi', fields: [{ label: 'Number of aircraft (n)', val: '50', key: 'n' }, { label: 'Total pairs checked', val: '1225', key: 'pairs' }, { label: 'Formula: n times (n minus 1) divided by 2', val: '1225', key: 'formula' }] }
  },
  {
    id: 16, name: "Brute-Force Convex Hull", mid: true,
    def: "A geometric algorithm that finds the outer boundary (convex hull) of a set of points. The brute-force approach tests every possible line segment formed by two points. If all other points lie on the same side of that line, the segment is part of the hull. This method has a complexity of O(n cubed).",
    ex: "Perimeter Fence for Cows: A farmer has 50 cows tracked via GPS and wants to build a perimeter fence enclosing every cow using minimum material. Software tests every possible line between pairs of cows, keeping only those where all other cows fall on one side.",
    answer: { type: 'multi', fields: [{ label: 'Number of cows (n)', val: '50', key: 'n' }, { label: 'Line segments tested', val: '1225', key: 'segments' }, { label: 'Point-side checks per segment (max)', val: '48', key: 'checks' }] }
  },
  {
    id: 17, name: "Depth First Search", mid: true,
    def: "A graph traversal algorithm that starts at a root node and explores as far as possible along each branch before backtracking. It uses a Stack data structure to keep track of the path. It is ideal for problems involving connectivity or searching in deep trees.",
    ex: "Escape Room Maze: You are in a maze-shaped escape room. Your strategy at every junction is to always take the leftmost door, going deeper until you hit a dead end. Only then do you backtrack to the last junction and try the next unexplored door, fully exploring each path before starting another.",
    answer: { type: 'multi', fields: [{ label: 'Data structure used', val: 'Stack', key: 'ds' }, { label: 'Backtrack trigger', val: 'Dead end', key: 'backtrack' }, { label: 'Traversal direction', val: 'Deepest branch first', key: 'order' }] }
  },
  {
    id: 18, name: "Breadth First Search", mid: true,
    def: "A graph traversal algorithm that explores all neighbor nodes at the current level before moving on to nodes at the next level. It uses a Queue (First-In First-Out) to manage the discovery process. It is guaranteed to find the shortest path in an unweighted graph.",
    ex: "Viral Marketing Campaign: A team sends a video link to 10 Tier-1 influencers. All 10 must share it before Tier-2 contacts are reached. If each influencer shares to 10 new people, the content spreads in concentric waves: 10 people at distance 1, then 100 at distance 2.",
    answer: { type: 'multi', fields: [{ label: 'Data structure used', val: 'Queue', key: 'ds' }, { label: 'Tier 1 reach (people)', val: '10', key: 'tier1' }, { label: 'Tier 2 reach (people)', val: '100', key: 'tier2' }, { label: 'Total reached after 2 waves', val: '110', key: 'total' }] }
  },
  {
    id: 19, name: "Insertion Sort", mid: true,
    def: "A comparison-based sorting algorithm that builds the final sorted array one item at a time. It takes each element from the unsorted part and inserts it into its correct position by shifting larger elements out of the way. It is highly efficient for small datasets or nearly-sorted data.",
    ex: "Card Hand Sorting: A bridge player is dealt 13 cards in random order. They pick up one card at a time and slide it into the correct position among the cards already sorted in their hand, shifting others over to make room.",
    answer: { type: 'multi', fields: [{ label: 'Number of cards (n)', val: '13', key: 'n' }, { label: 'Worst-case total shifts', val: '78', key: 'shifts' }, { label: 'Best-case total shifts (already sorted)', val: '0', key: 'best' }] }
  },
  {
    id: 20, name: "Topological Sort (DFS)", mid: true,
    def: "An ordering of vertices in a Directed Acyclic Graph such that for every directed edge from u to v, vertex u comes before v. The DFS-based version records the finish times of nodes; the reverse of these finish times provides the topological order. This is essential for scheduling tasks with dependencies.",
    ex: "Course Prerequisite Planning: A university enrollment system generates a graduation plan for a student. Some advanced courses have multiple layers of prerequisites. The system performs DFS on the course-dependency graph and produces a sequence ensuring no course is taken before its required prerequisites.",
    answer: { type: 'multi', fields: [{ label: 'Minimum edges for a course with 3 prereqs', val: '3', key: 'edges' }, { label: 'Valid ordering exists when cycles found', val: '0', key: 'cycle' }, { label: 'Valid ordering exists when no cycle found', val: '1', key: 'nocycle' }] }
  },
  {
    id: 21, name: "Topological Sort (Source-Removal)", mid: true,
    def: "An alternative topological sorting method also known as Kahn's Algorithm. It works by identifying all sources (nodes with in-degree of 0), adding them to the sorted list, and removing them from the graph. This process repeats, exposing new sources, until the graph is empty or a cycle is detected.",
    ex: "IKEA Wardrobe Assembly: An IKEA manual shows which parts depend on others. You start by identifying all parts that need nothing else attached first (in-degree 0) like the base. Once the base is built, new parts become available. You keep picking only currently free-to-install parts until the wardrobe is complete.",
    answer: { type: 'multi', fields: [{ label: 'Starting in-degree of first parts installed', val: '0', key: 'indegree' }, { label: 'Minimum parts removed per round', val: '1', key: 'removed' }, { label: 'Cycle detected: remaining nodes in queue', val: '0', key: 'cycle' }] }
  },
  {
    id: 22, name: "Binary Search", mid: true,
    def: "An efficient search algorithm that finds the position of a target value within a sorted array. It compares the target to the middle element. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half. This reduces the search space by half every step.",
    ex: "Dictionary Word Search: You are looking for the word Nebula in a 2000-page printed dictionary. Instead of reading every page, you open to page 1000 and see Lemon, so you know Nebula is in the second half. You repeatedly halve the remaining pages until you find the word.",
    answer: { type: 'multi', fields: [{ label: 'Dictionary pages (n)', val: '2000', key: 'n' }, { label: 'Steps to find the word', val: '11', key: 'steps' }, { label: 'Search space halved each step by factor', val: '2', key: 'factor' }] }
  },
  {
    id: 23, name: "Interpolation Search", mid: true,
    def: "An advanced search for sorted arrays with uniformly distributed values. Instead of always picking the middle, it calculates a probe position based on the target's value relative to the low and high values of the search range. In ideal cases it reaches a time complexity far better than binary search.",
    ex: "Phonebook Search for Zachary: You are looking for Zachary in a 1000-page phonebook. Knowing Z is near the very end of the alphabet, you flip directly to around page 999 on your first try, far better than opening to the middle at page 500 as binary search would.",
    answer: { type: 'multi', fields: [{ label: 'Phonebook pages (n)', val: '1000', key: 'pages' }, { label: 'Binary search first probe (page number)', val: '500', key: 'binary' }, { label: 'Interpolation first probe (page number)', val: '999', key: 'interpolation' }] }
  },
  {
    id: 24, name: "Mergesort", mid: true,
    def: "A divide-and-conquer sorting algorithm. It recursively divides the array into two halves until each sub-array contains a single element, then merges those sub-arrays back together in sorted order. It is a stable sort with a guaranteed time complexity of O(n log n) regardless of initial data order.",
    ex: "Library Book Sorting: A library needs to sort 10000 returned books. The head librarian splits them in half repeatedly until individual clerks have just one book each, then clerks begin merging pairs of sorted piles upward until the librarian merges the final two massive sorted stacks.",
    answer: { type: 'multi', fields: [{ label: 'Total books (n)', val: '10000', key: 'n' }, { label: 'Merge levels (ceiling of log base 2 of n)', val: '14', key: 'levels' }, { label: 'Single-book sub-arrays at the bottom level', val: '10000', key: 'subarrays' }] }
  },
  {
    id: 25, name: "Quicksort", mid: true,
    def: "A divide-and-conquer algorithm that picks an element as a pivot and partitions the array into two sub-arrays: elements less than the pivot and elements greater than the pivot. These are then sorted recursively. While its worst case is O(n squared), its average-case performance is O(n log n) with very low overhead.",
    ex: "Exam Paper Sorting: A teacher has 100 exam papers to sort by grade. They pull a random paper with grade 75 as the pivot, throw all higher-graded papers into a right pile and lower-graded into a left pile, then have aides repeat the process recursively on each smaller pile.",
    answer: { type: 'multi', fields: [{ label: 'Total papers (n)', val: '100', key: 'n' }, { label: 'Pivot value', val: '75', key: 'pivot' }, { label: 'Papers in left pile (grade below 75)', val: '74', key: 'left' }, { label: 'Papers in right pile (grade above 75)', val: '25', key: 'right' }] }
  },
  {
    id: 26, name: "Heap Construction", mid: false,
    def: "The process of organizing an unorganized array into a Binary Heap, a complete binary tree that satisfies the heap property. In a Max-Heap, every parent node is greater than or equal to its children. Floyd's bottom-up approach runs in O(n) time by performing sift-down operations on all non-leaf nodes starting from the bottom of the tree.",
    ex: "Emergency Room Triage: An ER receives 20 patients with varying injury levels. The system treats the patient list as a tree and heapifies it so the most critical case is always at the root, ready to be seen first.",
    answer: { type: 'multi', fields: [{ label: 'Total patients (n)', val: '20', key: 'n' }, { label: 'Non-leaf nodes heapified', val: '10', key: 'nonleaf' }, { label: 'Leaf nodes not processed', val: '10', key: 'leaf' }] }
  },
  {
    id: 27, name: "Heap Root Deletion", mid: false,
    def: "A fundamental operation for priority queues. The root (maximum or minimum element) is removed, and the last element in the heap is moved to the root position. To restore the heap property, this new root is sifted down by repeatedly swapping it with its largest child until it reaches a valid position. This operation takes O(log n) time.",
    ex: "CPU Task Scheduling: The OS removes the most urgent rendering task (the heap root) once it completes. The least urgent task is temporarily placed at the root, then sifted down until the correct new highest-priority task among the remaining 50 rises to the top.",
    answer: { type: 'multi', fields: [{ label: 'Tasks in heap (n)', val: '50', key: 'n' }, { label: 'Maximum sift-down swaps needed', val: '5', key: 'swaps' }, { label: 'Result of floor of log base 2 of 50', val: '5', key: 'formula' }] }
  },
  {
    id: 28, name: "Heapsort", mid: false,
    def: "A comparison-based sorting algorithm that uses a Binary Heap. It first transforms the input array into a Max-Heap, then repeatedly swaps the root (the maximum value) with the last unsorted element, sifting down after each swap. It combines O(n log n) efficiency with in-place space usage.",
    ex: "Olympic Sprinter Leaderboard: An Olympic committee sorts 100 sprinters by result. The system identifies the fastest runner for Gold, places them at the end of the sorted list, re-heaps the remaining runners, then identifies Silver, and so on, until all 100 are perfectly ranked.",
    answer: { type: 'multi', fields: [{ label: 'Number of sprinters (n)', val: '100', key: 'n' }, { label: 'Approximate total comparisons', val: '1329', key: 'comparisons' }, { label: 'Extra memory used (in-place)', val: '0', key: 'memory' }] }
  },
  {
    id: 29, name: "Linear Programming", mid: false,
    def: "A mathematical method for achieving the best outcome in a model whose requirements are represented by linear relationships. It finds the optimal point within a feasible region defined by linear inequality constraints, typically at a corner (vertex) of that region.",
    ex: "Bakery Production Optimization: A bakery has exactly 50 kg of flour and 20 kg of sugar. Each cake requires 2 kg of flour and 1 kg of sugar at a profit of 15 dollars. Each loaf of bread requires 1 kg of flour and 0.25 kg of sugar at a profit of 8 dollars. What production mix maximizes daily profit?",
    answer: { type: 'multi', fields: [{ label: 'Optimal number of cakes to bake', val: '0', key: 'cakes' }, { label: 'Optimal number of loaves to bake', val: '50', key: 'loaves' }, { label: 'Maximum daily profit (dollars)', val: '400', key: 'profit' }] }
  },
  {
    id: 30, name: "Dynamic Programming (Knapsack)", mid: false,
    def: "An optimization strategy used for problems with overlapping sub-problems. For the Knapsack problem, it builds a table storing the maximum value achievable for every possible weight capacity up to the limit. By referencing previously calculated results, it avoids the exponential complexity of trying every item combination.",
    ex: "Hiker Pack Optimization: A hiker has a 15 kg backpack and 10 items: Tent (4 kg, utility 10), Sleeping Bag (3 kg, 8), Stove (2 kg, 6), Camera (1 kg, 7), First Aid (1 kg, 9), Food (3 kg, 9), Water Filter (1 kg, 8), Rain Jacket (1 kg, 5), Headlamp (1 kg, 6), Trekking Poles (2 kg, 4). What items maximize utility without exceeding 15 kg?",
    answer: { type: 'multi', fields: [{ label: 'Maximum utility score', val: '62', key: 'utility' }, { label: 'Total weight used (kg)', val: '15', key: 'weight' }, { label: 'Number of items selected', val: '8', key: 'items' }] }
  },
  {
    id: 31, name: "Prim's Algorithm", mid: false,
    def: "A greedy algorithm that finds a Minimum Spanning Tree for a weighted undirected graph. It starts with a single vertex and grows the tree one edge at a time by always choosing the cheapest edge connecting a vertex in the tree to a vertex outside the tree. It is typically implemented using a priority queue.",
    ex: "Office Building Fiber Network: An IT firm connects 8 office buildings with fiber-optic cable at minimum cost. Starting at Building A, they always pick the cheapest available cable link to an unconnected building, growing the network until all 8 are linked.",
    answer: { type: 'multi', fields: [{ label: 'Number of buildings (vertices)', val: '8', key: 'vertices' }, { label: 'Edges in the minimum spanning tree', val: '7', key: 'edges' }, { label: 'Formula: vertices minus 1', val: '7', key: 'formula' }] }
  },
  {
    id: 32, name: "Kruskal's Algorithm", mid: false,
    def: "A greedy algorithm for finding the Minimum Spanning Tree that treats every node as an individual tree and repeatedly merges them. It sorts all edges by weight and adds the smallest edge that does not create a cycle, using the Union-Find data structure to efficiently track connected components.",
    ex: "Rail Network Construction: A rail authority wants to connect 10 cities with minimum construction cost. They sort every possible rail link cheapest-first, then add links in order, skipping any that would create a loop between already-connected cities, until all cities are in one network.",
    answer: { type: 'multi', fields: [{ label: 'Number of cities (vertices)', val: '10', key: 'vertices' }, { label: 'Rail links in the final spanning tree', val: '9', key: 'edges' }, { label: 'Formula: vertices minus 1', val: '9', key: 'formula' }] }
  },
  {
    id: 33, name: "Dijkstra's Algorithm", mid: false,
    def: "The gold standard for finding the shortest path from a starting node to all other nodes in a graph with non-negative edge weights. It maintains tentative distances and repeatedly visits the unvisited node with the smallest distance, updating its neighbors. It effectively fans out from the source in order of total path cost.",
    ex: "GPS Navigation: A GPS app finds the fastest route from home to a downtown stadium. Each road has a travel-time cost. The app expands outward from home, always following the path with the lowest total time so far, until it discovers the stadium via the mathematically fastest route.",
    answer: { type: 'multi', fields: [{ label: 'Minimum allowed edge weight', val: '0', key: 'minweight' }, { label: 'Shortest paths computed from 1 source', val: 'All nodes', key: 'result' }, { label: 'Nodes relaxed per step', val: '1', key: 'nodes' }] }
  },
  {
    id: 34, name: "Huffman's Algorithm", mid: false,
    def: "A greedy technique used for lossless data compression. It assigns variable-length codes to characters with shorter codes for more frequent characters by building a Huffman Tree from the bottom up. The Prefix Property ensures no code is a prefix of another, allowing unambiguous decoding.",
    ex: "Telegraph Message Compression: An operator sends the word BANANA (B appears 1 time, A appears 3 times, N appears 2 times). Using Huffman coding, the most frequent letter A gets 1 bit, N gets 2 bits, and B gets 2 bits, minimizing total transmission length.",
    answer: { type: 'multi', fields: [{ label: 'Fixed-length bits needed (2 bits x 6 chars)', val: '12', key: 'fixed' }, { label: 'Huffman-encoded total bits', val: '9', key: 'huffman' }, { label: 'Bits saved', val: '3', key: 'saved' }, { label: 'Compression percentage', val: '25', key: 'pct' }] }
  },
  {
    id: 35, name: "Branch and Bound (TSP)", mid: false,
    def: "An algorithmic design paradigm for solving combinatorial optimization problems. It explores a state-space tree but uses bounds to prune branches that cannot possibly improve on the best solution already found. For the Traveling Salesperson Problem, it abandons any partial route whose cost already exceeds the current best complete route.",
    ex: "Delivery Route Optimization: A driver must visit 15 houses. Mid-route, the driver realizes the distance traveled already exceeds a full route found earlier. Instead of completing the path, they prune it immediately and explore a different sequence, avoiding billions of unnecessary calculations.",
    answer: { type: 'multi', fields: [{ label: 'Number of houses', val: '15', key: 'houses' }, { label: 'Naive routes to check (15 factorial divided by 2)', val: '653837184000', key: 'naive' }, { label: 'Routes avoided by pruning (best case)', val: '653837183999', key: 'pruned' }] }
  },
  {
    id: 36, name: "Karatsuba Multiplication", mid: false,
    def: "A fast multiplication algorithm using divide-and-conquer that reduces the required number of single-digit multiplications from 4 to 3 via a clever algebraic identity. This improves the time complexity from O(n squared) to O(n to the power 1.585).",
    ex: "Encryption Key Computation: A bank's supercomputer multiplies two 1000-digit numbers for a security key. Standard long multiplication would require 1000000 individual multiplications. Karatsuba's algorithm completes the same task with roughly 56885 operations, a reduction of about 94 percent.",
    answer: { type: 'multi', fields: [{ label: 'Standard multiplications (1000 squared)', val: '1000000', key: 'standard' }, { label: 'Karatsuba multiplications (1000 to power 1.585)', val: '56885', key: 'karatsuba' }, { label: 'Reduction percentage', val: '94', key: 'reduction' }] }
  },
  {
    id: 37, name: "Graph Connectivity Check", mid: false,
    def: "The process of verifying if there is a path between every pair of vertices in a graph. For undirected graphs, a single BFS or DFS verifies connectivity by checking if all nodes are visited. For directed graphs, strong connectivity checks ensure every node can reach every other node.",
    ex: "Social Network Reach: A social media platform checks whether its Global News feed can reach all 500 users. They model users as nodes and follows as edges. A connectivity check reveals whether any isolated group exists who are cut off from the main network.",
    answer: { type: 'multi', fields: [{ label: 'Total users (nodes) checked', val: '500', key: 'nodes' }, { label: 'Connected result (1 = yes, 0 = no)', val: '1', key: 'connected' }, { label: 'Isolated users found if disconnected', val: 'More than 0', key: 'isolated' }] }
  },
  {
    id: 38, name: "Graph Acyclicity Check", mid: false,
    def: "An algorithm to determine if a graph contains any cycles (paths that start and end at the same node). In directed graphs, a cycle exists if DFS hits a node currently in the active recursion stack. This is vital for ensuring processes do not get stuck in infinite loops.",
    ex: "OS Deadlock Detection: Three apps each wait on another in a circular chain: App A waits for B, B waits for C, C waits for A. The OS runs an acyclicity check on the wait-for graph. Detecting the cycle allows it to terminate one app and break the deadlock.",
    answer: { type: 'multi', fields: [{ label: 'Apps involved in the deadlock cycle', val: '3', key: 'apps' }, { label: 'Cycle detected (1 = yes, 0 = no)', val: '1', key: 'cycle' }, { label: 'Apps to terminate to break the deadlock', val: '1', key: 'terminate' }] }
  },
  {
    id: 39, name: "Minimum Spanning Tree", mid: false,
    def: "The subset of edges in a connected edge-weighted undirected graph that connects all vertices together without any cycles and with the minimum possible total edge weight. The MST is the mathematical skeleton of the graph providing maximum connectivity at minimum cost.",
    ex: "Water Main Design: Civil engineers design a water main system for a housing development with 50 houses. Every house needs water but pipes are expensive. The MST blueprint provides the exact pipe layout that reaches every house using the fewest total meters of pipe.",
    answer: { type: 'multi', fields: [{ label: 'Number of houses (vertices)', val: '50', key: 'vertices' }, { label: 'Pipes (edges) in the MST', val: '49', key: 'edges' }, { label: 'Formula: vertices minus 1', val: '49', key: 'formula' }] }
  },
  {
    id: 40, name: "Shortest Paths Finding", mid: false,
    def: "A category of algorithms including Dijkstra, Bellman-Ford, and Floyd-Warshall designed to find the path with the minimum cumulative weight between nodes. Single-source algorithms find paths from one node to all others; all-pairs algorithms find the shortest distance between every possible pair of nodes.",
    ex: "Global Logistics Routing: A shipping company moves a container from a factory in Vietnam to a warehouse in Poland across a network of 100 hubs. The system evaluates every shipping lane, rail line, and trucking route, finding the sequence of transfers with the lowest total cost.",
    answer: { type: 'multi', fields: [{ label: 'Total hubs in the network (n)', val: '100', key: 'n' }, { label: 'Single-source shortest paths computed', val: '99', key: 'single' }, { label: 'All-pairs total paths computed (n times n minus 1)', val: '9900', key: 'allpairs' }] }
  },
  {
    id: 41, name: "Nondeterministic Algorithm", mid: false,
    def: "An algorithm that, even for the same input, can exhibit different behaviors on different runs. In theoretical computer science, it is an algorithm that can guess a solution and then verify its correctness in polynomial time. This concept is the basis for the NP (Nondeterministic Polynomial) class of problems.",
    ex: "Billion-Cell Sudoku: A research team considers a Sudoku with 1000000000 squares. A nondeterministic algorithm would guess all correct values simultaneously in one step. The only remaining work is a single linear verification pass to confirm no row or column has duplicates.",
    answer: { type: 'multi', fields: [{ label: 'Sudoku cells (n)', val: '1000000000', key: 'n' }, { label: 'Nondeterministic guess steps', val: '1', key: 'guess' }, { label: 'Verification steps (linear scan)', val: '1000000000', key: 'verify' }] }
  },
  {
    id: 42, name: "Approximation Algorithms", mid: false,
    def: "Algorithms used to find good enough solutions to NP-hard optimization problems. These algorithms come with a performance guarantee proving that the solution found will be within a certain factor of the true mathematical optimum, making them practical for real-world use.",
    ex: "City-Wide Trash Collection: A city routes 200 trucks to cover every street. Finding the perfect shortest route is computationally intractable. An approximation algorithm delivers a route guaranteed to be no more than 5 percent longer than the theoretical optimum, a difference negligible in practice.",
    answer: { type: 'multi', fields: [{ label: 'Number of trucks', val: '200', key: 'trucks' }, { label: 'Approximation guarantee (percent above optimal)', val: '5', key: 'guarantee' }, { label: 'Exact optimal solution found (1 = yes, 0 = no)', val: '0', key: 'exact' }] }
  }
];

/* ════════════════════════════════════════════════════════
   CONSTANTS
════════════════════════════════════════════════════════ */

const ICONS = [
  '⚙️','🔢','🔩','🧮','🔍','🗺️','🔄','🔁','🗼','💥',
  '🃏','🫧','🏴','🧬','✈️','🐄','🗝️','🌊','🃏','📐',
  '📏','📖','📚','⚡','🏗️','⚡','🏆','📊','🎒','🌿',
  '🔌','🌐','🧭','📡','🚚','💹','🕸️','🔗','💧','🛩️',
  '🦠','♻️'
];

// SVG coordinate positions for Midterm spots (x, y in SVG space 0-1000 x 0-1500)
const MID_POSITIONS = [
  [160,278],[285,252],[415,245],[545,247],[675,258],[800,278],
  [100,372],[220,338],[350,322],[485,318],[615,325],[745,335],[870,358],
  [135,462],[265,440],[400,425],[530,420],[660,433],[790,445],[890,462],
  [170,548],[310,538],[450,532],[590,536],[730,542],[860,530]
];

// SVG coordinate positions for Finals spots
const FIN_POSITIONS = [
  [160,1010],[280,985],[410,970],[540,968],[665,975],[785,996],[880,1030],
  [100,1110],[235,1090],[370,1075],[510,1072],[645,1078],[780,1090],[900,1115],
  [145,1210],[320,1218],[500,1228],[685,1220],[855,1205]
];

/* ════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════ */

const opened         = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]);
let   finalsUnlocked = true;
let   currentAlgoId  = null;
let   highestUnlocked = 42;

/* ════════════════════════════════════════════════════════
   UTILITY
════════════════════════════════════════════════════════ */

/**
 * Convert SVG coordinate space (0-1000 x 0-1500) to pixel position
 * relative to the SVG element on screen.
 */
function svgToPixel(svgX, svgY) {
  const svg    = document.getElementById('main-map-svg');
  const rect   = svg.getBoundingClientRect();
  const svgW   = 1000;
  const svgH   = 1500;
  const scale  = Math.min(rect.width / svgW, rect.height / svgH);
  const rendW  = svgW * scale;
  const offsetX = (rect.width - rendW) / 2;
  return {
    x: parseFloat((offsetX + svgX * scale).toFixed(2)),
    y: parseFloat((svgY * scale).toFixed(2))
  };
}

/** Normalise an answer string for comparison */
function normalise(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, '');
}

/** Spawn a golden spark ring at a screen position */
function spawnSpark(x, y) {
  const ring = document.createElement('div');
  ring.className = 'spark-ring';
  ring.style.left = x + 'px';
  ring.style.top  = y + 'px';
  document.body.appendChild(ring);
  setTimeout(() => ring.remove(), 600);
}

/** Move the ship SVG marker to pixel coordinates */
function moveShipTo(xPx, yPx) {
  const ship = document.getElementById('ship-marker');
  ship.style.left = xPx + 'px';
  ship.style.top  = (parseFloat(yPx) - 20) + 'px';
}

/* ════════════════════════════════════════════════════════
   STARS (landing page)
════════════════════════════════════════════════════════ */

function buildStars() {
  const container = document.getElementById('stars-bg');
  if (!container) return;
  for (let i = 0; i < 120; i++) {
    const s    = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `top:${10 + Math.random() * 90}%`,
      `animation-delay:${Math.random() * 3}s`,
      `animation-duration:${1.5 + Math.random() * 2.5}s`,
      `opacity:${0.3 + Math.random() * 0.7}`
    ].join(';');
    container.appendChild(s);
  }
}

/* ════════════════════════════════════════════════════════
   CREW MODAL
════════════════════════════════════════════════════════ */

function openCrewModal(idx) {
  const c = CREW_DATA[idx];
  document.getElementById('cm-avatar').textContent = c.emoji;
  document.getElementById('cm-name').textContent   = c.name;
  document.getElementById('cm-role').textContent   = '— ' + c.role + ' —';
  document.getElementById('cm-bio').textContent    = c.bio;
  const ul = document.getElementById('cm-duties');
  ul.innerHTML = c.duties.map(d => `<li style="margin-bottom:4px">${d}</li>`).join('');
  document.getElementById('crew-modal').classList.add('open');
}

function closeCrewModal() {
  document.getElementById('crew-modal').classList.remove('open');
}

function closeCrewBg(e) {
  if (e.target === document.getElementById('crew-modal')) closeCrewModal();
}

/* ════════════════════════════════════════════════════════
   ANSWERS PANEL
════════════════════════════════════════════════════════ */

function buildAnswersPanel() {
  const body = document.getElementById('answers-body');
  body.innerHTML = ALGOS.map(a => {
    let ans = '';
    const av = a.answer;
    if (av.type === 'single')  ans = av.val;
    if (av.type === 'multi')   ans = av.fields.map(f => f.label + ': ' + f.val).join(', ');
    if (av.type === 'array')   ans = '[' + av.vals.join(', ') + ']';
    if (av.type === 'sequence') ans = av.vals.join(' → ');
    return `
      <div class="answer-row">
        <span class="answer-num">#${a.id}</span>
        <span class="answer-name">${a.name}</span>
        <span class="answer-val">${ans}</span>
      </div>`;
  }).join('');
}

function openAnswers() {
  buildAnswersPanel();
  document.getElementById('answers-overlay').classList.add('open');
}

function closeAnswers() {
  document.getElementById('answers-overlay').classList.remove('open');
}

function closeAnswersBg(e) {
  if (e.target === document.getElementById('answers-overlay')) closeAnswers();
}

/* ════════════════════════════════════════════════════════
   ANSWER INPUTS
════════════════════════════════════════════════════════ */

function buildAnswerInputs(a) {
  const container = document.getElementById('answer-inputs');
  container.innerHTML = '';
  const av = a.answer;

  if (av.type === 'single') {
    container.innerHTML = `
      <div class="answer-input-row">
        <span style="font-size:0.9rem;color:#7a5010;">${av.label}:</span>
        <input class="answer-input wide" id="ai_0" placeholder="Your answer" />
      </div>`;
    return;
  }

  if (av.type === 'multi') {
    container.innerHTML = av.fields.map((f, i) => `
      <div class="answer-input-row">
        <span style="font-size:0.9rem;color:#7a5010;min-width:160px;">${f.label}:</span>
        <input class="answer-input wide" id="ai_${i}" placeholder="Answer" />
      </div>`).join('');
    return;
  }

  if (av.type === 'array') {
    const brackets = `
      <span class="answer-bracket">[</span>
      ${av.vals.map((_, i) => `<input class="answer-input narrow" id="ai_${i}" placeholder="?" />`).join('<span style="color:#7a5010;margin:0 2px;">,</span>')}
      <span class="answer-bracket">]</span>`;
    container.innerHTML = `<div class="answer-input-row">${brackets}</div>`;
    return;
  }

  if (av.type === 'sequence') {
    container.innerHTML = `
      <div class="answer-input-row">
        ${av.vals.map((_, i) => `<input class="answer-input narrow" id="ai_${i}" placeholder="?" />`).join('<span style="color:#7a5010;margin:0 3px;">→</span>')}
      </div>`;
  }
}

/* ════════════════════════════════════════════════════════
   CHECK ANSWER
════════════════════════════════════════════════════════ */

function checkAnswer() {
  const a  = ALGOS.find(x => x.id === currentAlgoId);
  if (!a) return;
  const av = a.answer;
  const fb = document.getElementById('answer-feedback');
  let correct = false;

  if (av.type === 'single') {
    const v = document.getElementById('ai_0').value;
    correct = normalise(v) === normalise(av.val);
    document.getElementById('ai_0').className = 'answer-input wide ' + (correct ? 'correct' : 'wrong');
  }

  else if (av.type === 'multi') {
    let allOk = true;
    av.fields.forEach((f, i) => {
      const v  = document.getElementById(`ai_${i}`).value;
      const ok = normalise(v) === normalise(f.val);
      document.getElementById(`ai_${i}`).className = 'answer-input wide ' + (ok ? 'correct' : 'wrong');
      if (!ok) allOk = false;
    });
    correct = allOk;
  }

  else if (av.type === 'array' || av.type === 'sequence') {
    let allOk = true;
    av.vals.forEach((v, i) => {
      const inp = document.getElementById(`ai_${i}`);
      const ok  = normalise(inp.value) === normalise(v);
      inp.className = 'answer-input narrow ' + (ok ? 'correct' : 'wrong');
      if (!ok) allOk = false;
    });
    correct = allOk;
  }

  if (correct) {
    fb.textContent  = '✅ Correct! Click Continue to proceed to the next algorithm.';
    fb.className    = 'answer-feedback show ok';
    document.getElementById('btn-continue').className = 'btn-continue show';
    if (a.id >= highestUnlocked) highestUnlocked = a.id + 1;
  } else {
    fb.textContent = '❌ Not quite. Check your answers and try again!';
    fb.className   = 'answer-feedback show bad';
    document.getElementById('btn-continue').className = 'btn-continue';
  }
}

/* ════════════════════════════════════════════════════════
   CONTINUE / PROGRESS
════════════════════════════════════════════════════════ */

function continueNext() {
  const a = ALGOS.find(x => x.id === currentAlgoId);
  opened.add(a.id);
  updateProgress();
  buildSpots();
  checkUnlock();
  closeModal();

  const nextId   = a.id + 1;
  const nextAlgo = ALGOS.find(x => x.id === nextId);

  if (nextAlgo) {
    let raw;
    if (nextAlgo.mid) {
      const midAlgos = ALGOS.filter(x => x.mid);
      const idx      = midAlgos.findIndex(x => x.id === nextId);
      raw = MID_POSITIONS[idx];
    } else {
      const finAlgos = ALGOS.filter(x => !x.mid);
      const idx      = finAlgos.findIndex(x => x.id === nextId);
      raw = FIN_POSITIONS[idx];
    }
    if (raw) {
      const pos = svgToPixel(raw[0], raw[1]);
      moveShipTo(pos.x, pos.y);
    }
  } else {
    // All 42 done
    const pos = svgToPixel(500, 1370);
    moveShipTo(pos.x, pos.y);
    setTimeout(() => {
      document.getElementById('completion-overlay').classList.add('open');
    }, 800);
  }
}

function updateProgress() {
  const pct = (opened.size / 42) * 100;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('opened-count').textContent = opened.size;
}

function checkUnlock() {
  const midAlgos = ALGOS.filter(a => a.mid);
  if (midAlgos.every(a => opened.has(a.id)) && !finalsUnlocked) {
    finalsUnlocked = true;
    highestUnlocked = 26;
    const veil = document.getElementById('finals-veil');
    veil.style.transition = 'opacity 0.8s ease';
    veil.style.opacity    = '0';
    setTimeout(() => { veil.style.display = 'none'; }, 850);
    buildSpots();
  }
}

/* ════════════════════════════════════════════════════════
   SPOTS (treasure chests on map)
════════════════════════════════════════════════════════ */

function buildSpots() {
  const layer = document.getElementById('spots-layer');
  layer.innerHTML = '';

  const svg      = document.getElementById('main-map-svg');
  const rect     = svg.getBoundingClientRect();
  const scale    = Math.min(rect.width / 1000, rect.height / 1500);
  const renderedW = 1000 * scale;
  const renderedH = 1500 * scale;
  const offsetX  = (rect.width - renderedW) / 2;

  layer.style.width  = rect.width + 'px';
  layer.style.height = renderedH + 'px';

  const midAlgos = ALGOS.filter(a => a.mid);
  const finAlgos = ALGOS.filter(a => !a.mid);

  midAlgos.forEach((a, i) => {
    const raw    = MID_POSITIONS[i] || [500, 380];
    const pos    = svgToPixel(raw[0], raw[1]);
    const locked = a.id > highestUnlocked;
    createSpot(layer, a, pos.x, pos.y, locked);
  });

  finAlgos.forEach((a, i) => {
    const raw    = FIN_POSITIONS[i] || [500, 1050];
    const pos    = svgToPixel(raw[0], raw[1]);
    const locked = !finalsUnlocked || a.id > highestUnlocked;
    createSpot(layer, a, pos.x, pos.y, locked);
  });

  // End destination marker
  const endPos = svgToPixel(500, 1370);
  const allDone = ALGOS.every(a => opened.has(a.id));
  const endEl   = document.createElement('div');
  endEl.className = 'end-port-spot' + (allDone ? ' unlocked-end' : '');
  endEl.style.left = endPos.x + 'px';
  endEl.style.top  = endPos.y + 'px';
  endEl.innerHTML  = `
    <div class="end-port-chest">${allDone ? '🏆' : '🔐'}</div>
    <div class="end-port-label">${allDone ? 'Final Treasure!' : 'Complete All 42'}</div>`;
  if (allDone) {
    endEl.style.cursor = 'pointer';
    endEl.onclick = () => document.getElementById('completion-overlay').classList.add('open');
  }
  layer.appendChild(endEl);
}

function createSpot(layer, a, xPx, yPx, locked) {
  const el = document.createElement('div');
  el.className  = 't-spot' + (opened.has(a.id) ? ' found' : '') + (locked ? ' locked-spot' : '');
  el.style.left = xPx + 'px';
  el.style.top  = yPx + 'px';
  el.setAttribute('data-id', a.id);
  el.setAttribute('title', a.name);

  const icon = ICONS[(a.id - 1) % ICONS.length];
  el.innerHTML = `
    <div class="t-chest">${opened.has(a.id) ? '✅' : icon}</div>
    <div class="t-spot-num">#${a.id}</div>
    <div class="t-spot-label">${a.name}</div>`;

  if (!locked) {
    el.onclick = (ev) => openTreasure(a.id, ev, xPx, yPx);
  }
  layer.appendChild(el);
}

/* ════════════════════════════════════════════════════════
   TREASURE MODAL
════════════════════════════════════════════════════════ */

function openTreasure(id, ev, xPx, yPx) {
  if (id > highestUnlocked) return;

  const a = ALGOS.find(x => x.id === id);
  if (!a) return;

  if (ev) {
    const r = ev.currentTarget.getBoundingClientRect();
    spawnSpark(r.left + r.width / 2, r.top + r.height / 2 + window.scrollY);
  }

  if (xPx !== undefined && xPx !== null) moveShipTo(xPx, yPx);

  currentAlgoId = id;
  document.getElementById('m-num').textContent  = `Treasure #${a.id} of 42`;
  document.getElementById('m-name').textContent = a.name;
  document.getElementById('m-def').textContent  = a.def;
  document.getElementById('m-ex').textContent   = a.ex;

  // Reset answer UI
  document.getElementById('answer-feedback').className = 'answer-feedback';
  document.getElementById('btn-continue').className    = 'btn-continue';
  buildAnswerInputs(a);

  // If already completed, allow continue immediately
  if (opened.has(id)) {
    document.getElementById('answer-feedback').textContent = '✅ Already completed! Click Continue to proceed.';
    document.getElementById('answer-feedback').className   = 'answer-feedback show ok';
    document.getElementById('btn-continue').className      = 'btn-continue show';
  }

  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  currentAlgoId = null;
}

function closeBg(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

/* ════════════════════════════════════════════════════════
   PAGE NAVIGATION
════════════════════════════════════════════════════════ */

function goToMap() {
  const landing = document.getElementById('page-landing');
  const mapPage = document.getElementById('page-map');

  landing.style.opacity   = '0';
  landing.style.transform = 'scale(1.18)';

  setTimeout(() => {
    landing.style.display = 'none';
    mapPage.style.display = 'block';
    mapPage.style.opacity = '0';

    requestAnimationFrame(() => {
      mapPage.style.transition = 'opacity 0.6s ease';
      mapPage.style.opacity    = '1';

      if (!finalsUnlocked) {
        const veil = document.getElementById('finals-veil');
        veil.style.display = 'flex';
        veil.style.opacity = '1';
      }

      requestAnimationFrame(() => initSpots());
    });
  }, 800);
}

function goBack() {
  const landing = document.getElementById('page-landing');
  const mapPage = document.getElementById('page-map');

  mapPage.style.transition = 'opacity 0.5s ease';
  mapPage.style.opacity    = '0';

  setTimeout(() => {
    mapPage.style.display   = 'none';
    landing.style.cssText   = 'display:flex;opacity:0;transform:scale(1.1);transition:opacity 0.6s ease,transform 0.6s ease;';
    requestAnimationFrame(() => {
      landing.style.opacity   = '1';
      landing.style.transform = 'scale(1)';
    });
  }, 500);
}

/* ════════════════════════════════════════════════════════
   MAP INITIALISATION
════════════════════════════════════════════════════════ */

function initSpots() {
  const svg   = document.getElementById('main-map-svg');
  const rect  = svg.getBoundingClientRect();
  const scale = Math.min(rect.width / 1000, rect.height / 1500);

  // Position ship at first spot (Euclid's Algorithm: SVG 160, 278)
  const shipStart = svgToPixel(160, 278);
  const ship      = document.getElementById('ship-marker');
  ship.style.left = shipStart.x + 'px';
  ship.style.top  = (shipStart.y - 20) + 'px';

  // Position and size the finals veil overlay
  const veil    = document.getElementById('finals-veil');
  const veilTop = 900 * scale;
  veil.style.top    = veilTop + 'px';
  veil.style.height = (1500 * scale - veilTop) + 'px';

  buildSpots();
}

/* ════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════ */

buildStars();

window.addEventListener('resize', () => {
  const mapPage = document.getElementById('page-map');
  if (mapPage && mapPage.style.display !== 'none') {
    initSpots();
  }
});
