//Model loader tests
import nesting { nameTest }
import check { check }

shared void testModelLoader() {
    check(nameTest.mltest1("X") is {String*}, "Class from object");
    check(nameTest.mltest2() is Destroyable, "Interface from object");
}
