import { object, any } from 'joi';

const schema = object({
    a: any()
});
const value = {
    a: '123'
};
const result = schema.validate(value);
console.log(result);
//It will return a value, if value is validated.