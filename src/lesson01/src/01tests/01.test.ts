import {mult, splitIntoWords, sum} from './01';


test('sum be corrected', () => {
    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = sum(a,b);
    expect(result1).toBe(3);
    const result2 = sum(b,c);
    expect(result2).toBe(5);
    const result3 = sum(c,a);
    expect(result3).toBe(4);
})

test('multiply be corrected', () => {
    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = mult(a,b);
    expect(result1).toBe(2);
    const result2 = mult(b,c);
    expect(result2).toBe(6);
    const result3 = mult(c,a);
    expect(result3).toBe(3);
})

test('spliting into words should be corrected', () => {
    const sent1 = 'Hello my friend!';
    const sent2 = 'JS - is programming language';

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');



})