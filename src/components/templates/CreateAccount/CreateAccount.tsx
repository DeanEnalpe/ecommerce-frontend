import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';


export default function AuthenticationForm(props: PaperProps) {
  const [type ] = (["Create"]);

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      terms: false,
    },

    // validate: {
    //   email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    //   password: (val) =>
    //     val.length <= 6
    //       ? "Password should include at least 6 characters"
    //       : null,
    // },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to ECommerce System, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
        {/* <GmailButton radius="xl">Gmail</GmailButton> */}
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          <Group grow mb="md" mt="md">
            <TextInput
              required
              label="First Name"
              placeholder="Your name"
              value={form.values.firstname}
              onChange={(event: { currentTarget: { value: string } }) =>
                form.setFieldValue("firstname", event.currentTarget.value)
              }
              radius="md"
            />
            <TextInput
              required
              label="Last Name"
              placeholder="Your name"
              value={form.values.lastname}
              onChange={(event: { currentTarget: { value: string } }) =>
                form.setFieldValue("lastname", event.currentTarget.value)
              }
              radius="md"
            />
            </Group>
         
          <TextInput
            required
            label="Email"
            placeholder="ecommerce@gmail.com"
            value={form.values.email}
            onChange={(event: { currentTarget: { value: string } }) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event: { currentTarget: { value: string } }) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />
           <PasswordInput
            required
            label="Confirm Password"
            placeholder="Your password"
            value={form.values.confirmpassword}
            onChange={(event: { currentTarget: { value: string } }) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
            radius="md"
          />

            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event: { currentTarget: { checked: boolean } }) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
        
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            size="xs"
          >
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
