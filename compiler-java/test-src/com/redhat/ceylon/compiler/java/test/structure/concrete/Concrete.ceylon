@nomodel
interface Concrete<A> {
    void mNonShared(A? a = null, A?... aseq={a}) {
    }
    shared void mShared(A? a = null, A?... aseq={a}) {
        mNonShared();
    }
    shared formal void mFormal(A? a = null, A?... aseq={a});
    shared default void mDefault(A? a = null, A?... aseq={a}) {
    }
}
@nomodel
void concreteCallsites(Concrete<Integer|Float> conc) {
    conc.mShared();
    conc.mShared(null);
    conc.mShared(1);
    conc.mShared(1.0);
    conc.mShared{};
    conc.mShared{a=null;};
    conc.mShared{a=1;};
    conc.mShared{a=1.0;};
    
    conc.mFormal();
    conc.mFormal(null);
    conc.mFormal(1);
    conc.mFormal(1.0);
    conc.mFormal{};
    conc.mFormal{a=null;};
    conc.mFormal{a=1;};
    conc.mFormal{a=1.0;};
    
    conc.mDefault();
    conc.mDefault(null);
    conc.mDefault(1);
    conc.mDefault(1.0);
    conc.mDefault{};
    conc.mDefault{a=null;};
    conc.mDefault{a=1;};
    conc.mDefault{a=1.0;};
}
@nomodel
class ConcreteImpl<B>() satisfies Concrete<B> {
    shared actual void mFormal(B? b, B?... bseq) {
    }
}
@nomodel
void concreteImplCallsites(ConcreteImpl<Integer|Float> conc) {
    conc.mShared();
    conc.mShared(null);
    conc.mShared(1);
    conc.mShared(1.0);
    conc.mShared{};
    conc.mShared{a=null;};
    conc.mShared{a=1;};
    conc.mShared{a=1.0;};
    
    conc.mFormal();
    conc.mFormal(null);
    conc.mFormal(1);
    conc.mFormal(1.0);
    conc.mFormal{};
    conc.mFormal{b=null;};
    conc.mFormal{b=1;};
    conc.mFormal{b=1.0;};
    
    conc.mDefault();
    conc.mDefault(null);
    conc.mDefault(1);
    conc.mDefault(1.0);
    conc.mDefault{};
    conc.mDefault{a=null;};
    conc.mDefault{a=1;};
    conc.mDefault{a=1.0;};
}
@nomodel
class ConcreteImplWithDefault<C>() satisfies Concrete<C> {
    shared actual void mFormal(C? c, C?... cseq) {
    }
    shared actual void mDefault(C? c, C?... cseq) {
    }
}
@nomodel
void concreteImplWithDefaultCallsites(ConcreteImplWithDefault<Integer|Float> conc) {
    conc.mShared();
    conc.mShared(null);
    conc.mShared(1);
    conc.mShared(1.0);
    conc.mShared{};
    conc.mShared{a=null;};
    conc.mShared{a=1;};
    conc.mShared{a=1.0;};
    
    conc.mFormal();
    conc.mFormal(null);
    conc.mFormal(1);
    conc.mFormal(1.0);
    conc.mFormal{};
    conc.mFormal{c=null;};
    conc.mFormal{c=1;};
    conc.mFormal{c=1.0;};
    
    conc.mDefault();
    conc.mDefault(null);
    conc.mDefault(1);
    conc.mDefault(1.0);
    conc.mDefault{};
    conc.mDefault{c=null;};
    conc.mDefault{c=1;};
    conc.mDefault{c=1.0;};
}
@nomodel
abstract class Abstract<D>() satisfies Concrete<D> {
}
@nomodel
void abstractCallsites(Abstract<Integer|Float> conc) {
    conc.mShared();
    conc.mShared(null);
    conc.mShared(1);
    conc.mShared(1.0);
    conc.mShared{};
    conc.mShared{a=null;};
    conc.mShared{a=1;};
    conc.mShared{a=1.0;};
    
    conc.mFormal();
    conc.mFormal(null);
    conc.mFormal(1);
    conc.mFormal(1.0);
    conc.mFormal{};
    conc.mFormal{a=null;};
    conc.mFormal{a=1;};
    conc.mFormal{a=1.0;};
    
    conc.mDefault();
    conc.mDefault(null);
    conc.mDefault(1);
    conc.mDefault(1.0);
    conc.mDefault{};
    conc.mDefault{a=null;};
    conc.mDefault{a=1;};
    conc.mDefault{a=1.0;};
}
@nomodel
class AbstractSub<E>() extends Abstract<E>() {
    shared actual void mFormal(E? e, E?... eseq) {
    }
}
@nomodel
void abstractSubCallsites(AbstractSub<Integer|Float> conc) {
    conc.mShared();
    conc.mShared(null);
    conc.mShared(1);
    conc.mShared(1.0);
    conc.mShared{};
    conc.mShared{a=null;};
    conc.mShared{a=1;};
    conc.mShared{a=1.0;};
    
    conc.mFormal();
    conc.mFormal(null);
    conc.mFormal(1);
    conc.mFormal(1.0);
    conc.mFormal{};
    conc.mFormal{e=null;};
    conc.mFormal{e=1;};
    conc.mFormal{e=1.0;};
    
    conc.mDefault();
    conc.mDefault(null);
    conc.mDefault(1);
    conc.mDefault(1.0);
    conc.mDefault{};
    conc.mDefault{a=null;};
    conc.mDefault{a=1;};
    conc.mDefault{a=1.0;};
}
@nomodel
abstract class AbstractImpl<F>() satisfies Concrete<F> {
    shared actual void mFormal(F? f, F?... fseq) {
    }
    shared actual default void mDefault(F? f, F?... fseq) {
    }
}
@nomodel
void abstractImpl(AbstractImpl<Integer|Float> conc) {
    conc.mShared();
    conc.mShared(null);
    conc.mShared(1);
    conc.mShared(1.0);
    conc.mShared{};
    conc.mShared{a=null;};
    conc.mShared{a=1;};
    conc.mShared{a=1.0;};
    
    conc.mFormal();
    conc.mFormal(null);
    conc.mFormal(1);
    conc.mFormal(1.0);
    conc.mFormal{};
    conc.mFormal{f=null;};
    conc.mFormal{f=1;};
    conc.mFormal{f=1.0;};
    
    conc.mDefault();
    conc.mDefault(null);
    conc.mDefault(1);
    conc.mDefault(1.0);
    conc.mDefault{};
    conc.mDefault{f=null;};
    conc.mDefault{f=1;};
    conc.mDefault{f=1.0;};
}
@nomodel
class AbstractImplSub<G>() extends AbstractImpl<G>() {
    shared actual void mDefault(G? g, G?... gseq) {
    }
}
@nomodel
void abstractImplSubCallsites(AbstractImplSub<Integer|Float> conc) {
    conc.mShared();
    conc.mShared(null);
    conc.mShared(1);
    conc.mShared(1.0);
    conc.mShared{};
    conc.mShared{a=null;};
    conc.mShared{a=1;};
    conc.mShared{a=1.0;};
    
    conc.mFormal();
    conc.mFormal(null);
    conc.mFormal(1);
    conc.mFormal(1.0);
    conc.mFormal{};
    conc.mFormal{f=null;};
    conc.mFormal{f=1;};
    conc.mFormal{f=1.0;};
    
    conc.mDefault();
    conc.mDefault(null);
    conc.mDefault(1);
    conc.mDefault(1.0);
    conc.mDefault{};
    conc.mDefault{g=null;};
    conc.mDefault{g=1;};
    conc.mDefault{g=1.0;};
}
