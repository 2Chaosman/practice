const Zero = () => z => z;
const Succ = n => f => x => n(f(n)(x));


Succ(Succ(Zero));
