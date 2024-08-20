import 'dotenv/config';
import * as joi from 'joi'

interface EnvVars {
    PORT: number;
    STRIPE_SECRET: string;
    STRIPE_ENDPOINT_SECRET: string;
    STRIPE_SUCCESS_URL: string;
    STRIPE_CANCEL_URL: string;
}

const envsScheme = joi.object({
    PORT: joi.number().required(),
    STRIPE_SECRET: joi.string().required(),
    STRIPE_ENDPOINT_SECRET: joi.string().required(),
    STRIPE_SUCCESS_URL: joi.string().required(),
    STRIPE_CANCEL_URL: joi.string().required()
})
.unknown()

const { error, value } = envsScheme.validate(process.env );

if( error ) {
    throw new Error(`Config validation error: ${error.message}`)
}

const env: EnvVars = value;

export const envs = {
    port: env.PORT,
    stripeSecret: env.STRIPE_SECRET,
    stripeEndpointSecret: env.STRIPE_ENDPOINT_SECRET,
    stripeSuccessUrl: env.STRIPE_SUCCESS_URL,
    stripeCancelUrl: env.STRIPE_CANCEL_URL
}