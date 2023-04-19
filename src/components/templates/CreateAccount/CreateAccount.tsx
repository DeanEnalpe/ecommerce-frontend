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
import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";
import Login from "../../templates/Login/Login";

export default function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "create"]);

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      terms: false,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Paper radius="md" p="xl" {...props}>
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
        {/* {type === "login" && (
          <Login />
        )} */}
          <Group grow mb={10} mt={-10}>
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
              onClick={() => toggle()}
              size="xs"
            >
              {type === "login"
                ? "Already have an account? Login":""}
            </Anchor>
            <Button type="submit" radius="xl">
              create
            </Button>
          </Group>
          
      </form>
    </Paper>
  );
}
