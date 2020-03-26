const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;


test("turi buti:", () => {
    const result = add(4, 6);
    expect(result).toBe(10);
});

test('gautas vardas', () => {
    const atsakymas = generateGreeting("peter");
    expect(atsakymas).toBe("Hello peter!");
})

test('negautas vardas', () => {
    const atsakymas = generateGreeting();
    expect(atsakymas).toBe("Hello Anonymous!");
})
