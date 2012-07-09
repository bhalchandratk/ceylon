function initTypeProtoI(a, b, c){} //IGNORE
function initTypeProto(a,b,c,d){}//IGNORE
function initType(a,b){}//IGNORE
function Boolean$(x){}//IGNORE
function IdentifiableObject(x){}//IGNORE
function ArraySequence(x){}//IGNORE
function Comprehension(x){}//IGNORE
function Exception(x){}//IGNORE
function String$(x){}//IGNORE
var Container,$finished,$true,$false,$empty,larger,smaller,exports;//IGNORE

function Iterator(wat) {
    return wat;
}
initType(Iterator, 'ceylon.language.Iterator');
exports.Iterator=Iterator;

function Iterable(wat) {
    return wat;
}
initTypeProtoI(Iterable, 'ceylon.language.Iterable', ContainerWithFirstElement);
var Iterable$proto=Iterable.$$.prototype;
Iterable$proto.getEmpty = function() {
    return Boolean$(this.getIterator().next() === $finished);
}
Iterable$proto.getFirst = function() {
    var e = this.getIterator().next();
    return e === $finished ? null : e;
}
Iterable$proto.getRest = function() {
    return this.skipping(Integer(1));
}
Iterable$proto.getSequence = function() {
    var a = [];
    var iter = this.getIterator();
    var next;
    while ((next = iter.next()) !== $finished) {
        a.push(next);
    }
    return ArraySequence(a);
}
Iterable$proto.map = function(mapper) {
    var iter = this;
    return Comprehension(function() {
        var it = iter.getIterator();
        return function() {
            var e = it.next();
            if(e !== $finished) {return mapper(e);}
            return $finished;
        }
    });
}
Iterable$proto.filter = function(select) {
    var iter = this;
    return Comprehension(function() {
        var it = iter.getIterator();
        return function() {
            do {
                var e = it.next();
            } while ((e !== $finished) && (select(e) === $false));
            return e;
        }
    });
}
Iterable$proto.fold = function(ini, accum) {
    var r = ini;
    var iter = this.getIterator();
    var e; while ((e = iter.next()) !== $finished) {
        r = accum(r, e);
    }
    return r;
}
Iterable$proto.find = function(select) {
    var iter = this.getIterator();
    var e; while ((e = iter.next()) !== $finished) {
        if (select(e) === $true) {
            return e;
        }
    }
    return null;
}
Iterable$proto.findLast = function(select) {
    var iter = this.getIterator();
    var last = null;
    var e; while ((e = iter.next()) !== $finished) {
        if (select(e) === $true) {
            last = e;
        }
    }
    return last;
}
Iterable$proto.sorted = function(/*Callable<Comparison?,Element,Element>*/comparing) {
    var a = [];
    var iter = this.getIterator();
    var e; while ((e = iter.next()) !== $finished) {
        a.push(e);
    }
    a.sort(function(x,y) {
        var r = comparing(x,y);
        if (r === larger) return 1;
        if (r === smaller) return -1;
        return 0;
    });
    return ArraySequence(a);
}
Iterable$proto.any = function(/*Callable<Boolean,Element>*/selecting) {
    var iter = this.getIterator();
    var e; while ((e = iter.next()) !== $finished) {
        if (selecting(e) === $true) {
            return $true;
        }
    }
    return $false;
}
Iterable$proto.every = function(/*Callable<Boolean,Element>*/selecting) {
    var iter = this.getIterator();
    var e; while ((e = iter.next()) !== $finished) {
        if (selecting(e) !== $true) {
            return $false;
        }
    }
    return $true;
}
Iterable$proto.skipping = function(skip) {
    function skip$iter(iter,skip){
        var $cmp$=new skip$iter.$$;
        IdentifiableObject($cmp$);
        $cmp$.iter=iter;
        $cmp$.skip=skip;
        $cmp$.getIterator=function(){
            var iter = this.iter.getIterator();
            for (var i=0; i < this.skip; i++) {
                iter.next();
            }
            return iter;
        };
        return $cmp$;
    }
    initTypeProto(skip$iter, 'ceylon.language.SkipIterable', IdentifiableObject, Iterable);
    return skip$iter(this,skip.value);
}
Iterable$proto.taking = function(take) {
    if (take.value <= 0) return $empty;
    var iter = this;
    return Comprehension(function() {
        var it = iter.getIterator();
        var i = 0;
        return function() {
            if (i >= take.value) {return $finished;}
            ++i;
            return it.next();
        }
    });
}
Iterable$proto.by = function(step) {
    if (step.value == 1) return this;
    if (step.value < 1) throw Exception(String$("Step must be positive"));
    var iter = this;
    return Comprehension(function() {
        var it = iter.getIterator();
        return function() {
            var e = it.next();
            for (var i=1; i<step.value && (it.next()!==$finished); i++);
            return e;
        }
    });
}
Iterable$proto.count = function(sel) {
	var c = 0;
	var iter = this.getIterator();
	var e; while ((e = iter.next()) !== $finished) {
		if (sel(e) === true) c++;
	}
	return Integer(c);
}
Iterable$proto.getCoalesced = function() {
    var iter = this;
    return Comprehension(function() {
        var it = iter.getIterator();
        return function() {
            var e;
            while ((e = it.next()) === null);
            return e;            
        }
    });
}
Iterable$proto.getIndexed = function() {
    var iter = this;
    return Comprehension(function() {
        var it = iter.getIterator();
        var idx = 0;
        return function() {
            var e;
            while ((e = it.next()) === null);
            return e === $finished ? e : Entry(Integer(idx++), e);
        }
    });
}
Iterable$proto.getLast = function() {
    var iter = this.getIterator();
    var l=null;
    var e; while ((e = iter.next()) !== $finished) {
        l=e;
    }
    return l;
}
Iterable$proto.chain = function(i2) {
	var i1=this;
	return Comprehension(function(){
		var it = ChainedIterator(i1, i2);
		return function() {
			return it.next();
		}
	});
}
exports.Iterable=Iterable;

function ChainedIterator(i1, i2) {
	var that = new ChainedIterator.$$;
	that.i1=i1;
	that.i2=i2;
	that.more=true;
	return that;
}
initTypeProto(ChainedIterator, 'ceylon.language.ChainedIterator', IdentifiableObject, Iterator);
ChainedIterator.$$.prototype.next = function() {
	if (this.iter === undefined) {
		this.iter = this.i1.getIterator();
	}
	var e = this.iter.next();
	if (e === $finished && this.more) {
		this.more=false;
		this.iter=this.i2.getIterator();
		e=this.iter.next();
	}
	return e;
}
exports.ChainedIterator=ChainedIterator;
