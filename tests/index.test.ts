import { test } from 'node:test';
import assert from 'node:assert';


test("Test the tests", async (t) => {
    const test = t.test.bind(t);

    await test('adds 1 + 1 to equal 2', () => {
        assert.equal(1 + 1, 2);
    });

    await test("True is true", () => {
        assert.ok('1' == true as any, '1 is true');
    })

    await test("False is false", () => {
        assert.ok('' == false as any, 'empty string is false');
    })

    await test('deep equality test', () => {
        assert.deepStrictEqual({ a: 1 }, { a: 1 }, 'two objects should be equal');
    });

    await test("Slow test", { skip: true }, () => {
        return new Promise(r => setTimeout(r, 1000));
    })

    t.todo('some things to do');


    await test('throws', () => {
        assert.throws(() => {
            throw new Error('this is an error')
        });
    })
})

