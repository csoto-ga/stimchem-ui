import * as z from 'zod';

enum TypeOfRequestOptions {
  Type1 = '1',
  Type2 = '2',
  Type3 = '3',
  Type4 = '4',
}

enum SubPslOptions {
  Type1 = '1',
  Type2 = '2',
  Type3 = '3',
  Type4 = '4',
}

enum PslOptions {
  Type1 = '1',
  Type2 = '2',
  Type3 = '3',
  Type4 = '4',
}

// enum ShippingSamplesOptions {
//   Type1 = '1',
//   Type2 = '2',
//   Type3 = '3',
//   Type4 = '4',
// }

// enum StatusOptions {
//   Type1 = '1',
//   Type2 = '2',
//   Type3 = '3',
//   Type4 = '4',
// }

const DATE_REGEX_MATCHER = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/; // YYYY-MM-DD

export const schema = z.object({
  name: z.string().min(1, { message: 'Required' }).default(''),
  work_location: z.string(),
  phone: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' }).email(),
  type_of_request: z.nativeEnum(TypeOfRequestOptions, {
    errorMap: () => ({ message: 'Required' }),
  }),
  is_tender: z.boolean(),
  date_of_request: z
    .string({
      required_error: 'Required',
      invalid_type_error: 'Required',
    })
    .min(1, { message: 'Required' })
    .regex(DATE_REGEX_MATCHER, {
      message: 'Invalid date format',
    }),
  date_final_report_requested: z
    .string({
      required_error: 'Required',
      invalid_type_error: 'Required',
    })
    .min(1, { message: 'Required' })
    .regex(DATE_REGEX_MATCHER, {
      message: 'Invalid date format',
    }),
  sub_psl: z.nativeEnum(SubPslOptions, {
    errorMap: () => ({ message: 'Required' }),
  }),
  cost_center: z.string().min(1, { message: 'Required' }),
  customer: z.string().min(1, { message: 'Required' }),
  type_of_data_being_requested: z.string().min(1, { message: 'Required' }),
  fluid_details: z.string(),
  project_revenue: z.string().min(1, { message: 'Required' }),
  psl: z.nativeEnum(PslOptions, {
    errorMap: () => ({ message: 'Required' }),
  }),
  shipping_samples: z.string(),
  status: z.string(),
  field_name: z.string(),
  formation_name: z.string(),
  bottom_hole_temperature: z.string(),
  bottom_hole_pressure: z.string(),
  otro: z.string().optional(),
});

export type FormInput = z.infer<typeof schema>;
