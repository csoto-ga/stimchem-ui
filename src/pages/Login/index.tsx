import { Card, Form, Hero, Input, Link, Button } from 'react-daisyui';

type LoginProps = {};

const Login = (props: LoginProps) => {
  return (
    <>
      <Hero>
        <Hero.Content className="flex-col lg:flex-row-reverse">
          <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Card.Body>
              <Form>
                <Form.Label title="Email" />
                <Input type="text" placeholder="email" className="input-bordered" />
              </Form>
              <Form>
                <Form.Label title="Password" />
                <Input type="text" placeholder="password" className="input-bordered" />
                <label className="label">
                  <Link href="#" className="label-text-alt" hover>
                    Forgot password?
                  </Link>
                </label>
              </Form>
              <Form className="mt-6">
                <Button>Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </>
  );
};

export default Login;
