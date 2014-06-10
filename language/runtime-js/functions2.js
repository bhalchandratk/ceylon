function internalSort(comp, elems, $$$mptypes) {
    if (elems===undefined) {return getEmpty();}
    var arr = [];
    var it = elems.iterator();
    var e;
    while ((e=it.next()) !== getFinished()) {arr.push(e);}
    if (arr.length === 0) {return getEmpty();}
    arr.sort(function(a, b) {
        var cmp = comp(a,b);
        return (cmp===getLarger()) ? 1 : ((cmp===getSmaller()) ? -1 : 0);
    });
    return ArraySequence(arr, {Element$Iterable:$$$mptypes.Element$internalSort});
}
internalSort.$crtmm$=function(){return{
  $an:function(){return[shared()];},mod:$CCMM$,d:['ceylon.language','internalSort'],
  $ps:[{$nm:'comparing',$t:{t:Callable,a:{Return$Callable:{t:Comparison},Arguments$Callable:{t:'T',l:['Element$internalSort','Element$internalSort']}}},$mt:'prm'},{$nm:'elements',$t:{t:Iterable,a:{Absent$Iterable:{t:Null},Element$Iterable:'Element$internalSort'}},$mt:'prm'}],
  $tp:{Element$internalSort:{}}, $t:{t:Sequential,a:{Absent$Iterable:{t:Null},Element$Iterable:'Element$internalSort'}}
}};

function flatten(tf, $$$mptypes) {
  function rf() {
    var argc = arguments.length;
    var last = argc>0 ? arguments[argc-1] : undefined;
    if (typeof(last) === 'object' && typeof(last.Args$flatten) === 'object' && (last.Args$flatten.t==='T'||typeof(last.Args$flatten.t) === 'function')) {
      argc--;
    }
    var t = [];
    for (var i=0;i<argc;i++) {
      t.push(arguments[i]);
    }
    t=tpl$(t);
    return tf(t, t.$$targs$$);
  };
  rf.$$targs$$={Return$Callable:$$$mptypes.Return$flatten,Arguments$Callable:$$$mptypes.Args$flatten};
  return rf;
}
flatten.$crtmm$=function(){return{
  $an:function(){return[shared()];},mod:$CCMM$,d:['ceylon.language','flatten'],
  $tp:{Return$flatten:{},Args$flatten:{'satisfies':[{t:Sequential,a:{Absent$Iterable:{t:Null},Element$Iterable:{t:Anything}}}]}},
  $t:{t:Callable,a:{Return$Callable:'Return',Arguments$Callable:{t:Sequential,a:{Absent$Iterable:{t:Null},Element$Iterable:{t:Anything}}}}},
  $p:[{$nm:'tupleFunction',$t:{t:Callable,a:{Return$Callable:'Return$flatten',Arguments$Callable:{t:'T',l:[{t:Sequential,a:{Absent$Iterable:{t:Null},Element$Iterable:{t:Anything}}}]}}},$mt:'prm'}]
}};

function unflatten(ff, $$$mptypes) {
  if (getrtmm$$(ff) && ff.$crtmm$.$ps) {
    var ru=function ru(seq,$mptypes) {
      if (seq===undefined || seq.size === 0) { return ff(); }
      var pmeta = ff.$crtmm$.$ps;
      var _lim=Math.max(pmeta.length,seq.size);
      var a = [];
      for (var i = 0; i < _lim; i++) {
        if (pmeta[i]&&pmeta[i]['seq']) {
          a.push(seq.skip(i).sequence());
          break;//we're done
        } else if (seq.size > i) {
          a.push(seq.$_get(i));
        }
      }
      if ($mptypes && ff.$crtmm$.$tp)a.push($mptypes);
      return ff.apply(ru, a);
    }
  } else {
    var ru=function ru(seq) {
      if (seq===undefined || seq.size === 0) { return ff(); }
      var a = [];
      for (var i = 0; i < seq.size; i++) {
        a[i] = seq.$_get(i);
      }
      a[i]=ru.$$targs$$;
      return ff.apply(ru, a);
    }
  }
  ru.$$targs$$={Return$Callable:$$$mptypes.Return$unflatten,Arguments$Callable:{t:'T',l:[$$$mptypes.Args$unflatten]}};
  return ru;
}
unflatten.$crtmm$=function(){return{
  $an:function(){return[shared()];},mod:$CCMM$,d:['ceylon.language','unflatten'],
  $tp:{Return$unflatten:{},Args$unflatten:{'satisfies':[{t:Sequential,a:{Absent$Iterable:{t:Null},Element$Iterable:{t:Anything}}}]}},
  $ps:[{$nm:'flatFunction',$t:{t:Callable,a:{Return$Callable:'Return$unflatten',Arguments$Callable:{t:Sequential,a:{Absent$Iterable:{t:Null},Element$Iterable:{t:Anything}}}}},$mt:'prm'}],
  $t:{t:Callable,a:{Return$Callable:'Return$unflatten',Arguments$Callable:{t:'T',l:[{t:Sequential,a:{Absent$Iterable:{t:Null},Element$Iterable:{t:Anything}}}]}}}
}};
ex$.flatten=flatten;
ex$.unflatten=unflatten;

//internal
function tpl$(elems,types,spread){
  if (spread!==undefined) {
    var iter=spread.iterator();
    for (var e=iter.next();e!==getFinished();e=iter.next()) {
      elems.push(e);
    }
  }
  if (elems.length===0)return getEmpty();
  if (types===undefined || types.t!=='T') {
    types=[];
    for (var i=0; i < elems.length; i++){
      if (elems[i]===null) {
        types.push({t:Null});
      } else if (elems[i].getT$all && elems[i].getT$name) {
        types.push({t:elems[i].getT$all()[elems[i].getT$name()]});
      } else {
        console.log("WTF do I use for the type of " + elems[i]);
        types.push({t:Anything});
      }
    }
    types={t:'T',l:types};
  }
  $init$Tuple();
  var that=new Tuple.$$;
  that.$$targs$$=types;
  that.$opt=1;
  Object$(that);
  var _t={t:'u',l:types.l};
  Sequence({Element$Sequence:_t},that);
  elems.$$targs$$={Element$Iterable:_t,Element$Sequential:_t,Element$List:_t,Element$Array:_t,Element$Sequence:_t,Absent$Iterable:{t:Nothing},
    Element$Collection:_t,Key$Correspondence:{t:Integer},Item$Correspondence:_t};
  set_type_args(that,elems.$$targs$$);
  that.$elems=elems;
  that.first_=elems[0];
  that.$_get=function(i){
    var e=elems[i]
    return e===undefined?null:e;
  };
  that.$_get.$crtmm$=Tuple.$$.prototype.$_get.$crtmm$;
  that.iterator=function(){ return elems.iterator(); }
  that.iterator.$crtmm$=Tuple.$$.prototype.iterator.$crtmm$;
  that.contains=function(i) { return elems.contains(i); }
  that.contains.$crtmm$=Tuple.$$.prototype.contains.$crtmm$;
  that.withLeading=function(a,b) { return elems.withLeading(a,b); }
  that.withLeading.$crtmm$=Tuple.$$.prototype.withLeading.$crtmm$;
  that.span=function(a,b){ return elems.span(a,b); }
  that.span.$crtmm$=Tuple.$$.prototype.span.$crtmm$;
  that.spanTo=function(x){ return elems.spanTo(x); }
  that.spanTo.$crtmm$=Tuple.$$.prototype.spanTo.$crtmm$;
  that.spanFrom=function(x){ return elems.spanFrom(x); }
  that.spanFrom.$crtmm$=Tuple.$$.prototype.spanFrom.$crtmm$;
  that.segment=function(a,b){ return elems.segment(a,b); }
  that.segment.$crtmm$=Tuple.$$.prototype.segment.$crtmm$;
  that.equals=function(o){return elems.equals(o);}
  that.equals.$crtmm$=List.$$.prototype.equals.$crtmm$;
  that.withTrailing=function(a,b){return elems.withTrailing(a,b);}
  that.withTrailing.$crtmm$=List.$$.prototype.withTrailing.$crtmm$;
  that.chain=function(a,b){return elems.chain(a,b);}
  that.chain.$crtmm$=Iterable.$$.prototype.chain.$crtmm$;
  that.longerThan=function(i){return elems.longerThan(i);}
  that.longerThan.$crtmm$=Iterable.$$.prototype.longerThan.$crtmm$;
  that.shorterThan=function(i){return elems.shorterThan(i);}
  that.shorterThan.$crtmm$=Iterable.$$.prototype.shorterThan.$crtmm$;
  atr$(that,'hash',function(){
    return elems.hash;
  },undefined,List.$$.prototype.$prop$getHash.$crtmm$);
  atr$(that,'rest',function(){
    return elems.length==1?getEmpty():ArraySequence(elems.slice(1),{Element$Iterable:{t:'u',l:_t.l.slice(1)}});
  },undefined,Tuple.$$.prototype.$prop$getRest.$crtmm$);
  atr$(that,'size',function(){
    return elems.length;
  },undefined,Tuple.$$.prototype.$prop$getSize.$crtmm$);
  atr$(that,'lastIndex',function(){
    return elems.length-1;
  },undefined,Tuple.$$.prototype.$prop$getLastIndex.$crtmm$);
  atr$(that,'last',function(){
    return elems[elems.length-1];
  },undefined,Tuple.$$.prototype.$prop$getLast.$crtmm$);
  atr$(that,'reversed',function(){
    return elems.reversed;
  },undefined,Tuple.$$.prototype.$prop$getReversed.$crtmm$);
  return that;
}
ex$.tpl$=tpl$;
