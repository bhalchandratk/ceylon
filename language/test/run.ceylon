shared void run() {
    print("Testing equality");
    equality();
    //complex();
    print("Testing booleans");
    booleans();
    print("Testing numbers");
    numbers();
    print("Testing sequences");
    sequences();
    print("Testing characters");
    characters();
    print("Testing strings");
    strings();
    print("Testing iterators");
    iterators();
    print("Testing entries and ranges");
    entriesAndRanges();
    print("Testing comparables");
    comparables();
    print("Testing clones");
    clones();
    print("Testing types");
    types();
    print("Testing exceptions");
    exceptions();
    print("Testing operators");
    operators();
    print("Testing callables");
    callables();
    print("Misc tests");
    misc();
    print("Array/Collection/FixedSized tests");
    testArrays();
    print("Map tests");
    testMaps();
    print("Set tests");
    testSets();
	print("Iterables test (map/fold/filter/find)");
	testIterables();
    print("Testing comprehensions");
    comprehensions();
    results();
}

shared void test() { run(); }
