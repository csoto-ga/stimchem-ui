import * as z from 'zod';

enum TypeOfRequestOptions {
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

enum TypeOfApplicationOptions {
  Type1 = '1',
  Type2 = '2',
  Type3 = '3',
  Type4 = '4',
}

const DATE_REGEX_MATCHER = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/; // YYYY-MM-DD

export const schema = z.object({
  name: z.string().min(1, { message: 'Required' }).default(''),
  work_location: z.string(),
  phone: z.string().min(1, { message: 'Required' }),
  email: z.string().min(1, { message: 'Required' }).email(),
  customer: z.string().min(1, { message: 'Required' }),
  is_tender: z.boolean().default(false),
  formation_name: z.string(),
  field_name: z.string(),
  type_of_request: z.nativeEnum(TypeOfRequestOptions, {
    errorMap: () => ({ message: 'Required' }),
  }),
  application: z.nativeEnum(TypeOfApplicationOptions, {
    errorMap: () => ({ message: 'Required' }),
  }),
  psl: z.nativeEnum(PslOptions, {
    errorMap: () => ({ message: 'Required' }),
  }),
  project_revenue: z.string().min(1, { message: 'Required' }),
  is_shipping_samples: z.boolean().default(false),
  cost_center: z.string().min(1, { message: 'Required' }),
  well_name: z.string(),
  depth: z.string(),
  bottom_hole_temperature: z.string(),
  bottom_hole_pressure: z.string(),
  type_of_data_requested: z.string().min(1, { message: 'Required' }),
  fluid_details: z.string(),
  project_number: z.string(),
  project_title: z.string(),
  project_type: z.string(),
  network_code: z.string(),
  labor_code: z.string(),
  materials_code: z.string(),
  services_code: z.string(),
  travel_code: z.string(),
  project_lead: z.string(),
  project_lead_email: z.string(),
  shipping_address: z.string(),
  project_resources: z.string(),
  status: z.string(),
  date_of_request: z.nullable(z.string()).default(null),
  date_final_report_requested: z
    .string({
      required_error: 'Required',
      invalid_type_error: 'Required',
    })
    .min(1, { message: 'Required' })
    .regex(DATE_REGEX_MATCHER, {
      message: 'Invalid date format',
    }),
  ready_for_close_date: z.nullable(z.string()).default(null),
});

// Function to check if a field is required
export const isFieldRequired = (fieldName: keyof FormInput) => {
  const field = schema.shape[fieldName];
  // Check if the field has a nonempty constraint
  return field.safeParse('').success === false;
};

export type FormInput = z.infer<typeof schema>;
