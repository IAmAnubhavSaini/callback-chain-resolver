import test from 'ava';
import r from './';

function incrementBy1(x) {
    return x + 1;
}
function decrementBy1(x) {
    return x - 1;
}

test('incrementing 1 thrice should get 4', async t => {
    t.is(r.resolver(1, [incrementBy1, incrementBy1, incrementBy1]), 4);
});

test('decrementing 1 thrice should get -2', async t => {
    t.is(r.resolver(1, [decrementBy1, decrementBy1, decrementBy1]), -2);
});

test('incrementing decrementing once should get same value', async t => {
    t.is(r.resolver(1, [incrementBy1, decrementBy1]), 1);
});

test('decrementing incrementing once should get same value', async t => {
    t.is(r.resolver(1, [decrementBy1, incrementBy1]), 1);
});
