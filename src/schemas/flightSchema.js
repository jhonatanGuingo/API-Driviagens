import Joi from "joi";


export const flightSchema = Joi.object({
    origin: Joi.number().required(),
    destination: Joi.number().required(),
    date: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required()
});

export const flightSchemaDate = Joi.object({
    smallerDate: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/),
    biggerDate: Joi.string().regex(/^\d{2}-\d{2}-\d{4}$/)
})