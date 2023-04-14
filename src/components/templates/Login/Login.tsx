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
import {
  GoogleButton,
  SocialButtons,
  TwitterButton,
} from "../SocialButtons/SocialButtons";
import { useState } from "react";
import CreateAccount from "../../templates/CreateAccount/CreateAccount";

export default function AuthenticationForm(props: PaperProps) {
  const [data, setData] = useState([]);
  const [type, toggle] = useToggle(["login", "create"]);
  const form = useForm({
    initialValues: {
      email: "",

      password: "",
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
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to ECommerce System, {type} with
      </Text>

      <SocialButtons />

      <Divider label="Or continue with email" labelPosition="center" my="lg" />
     
      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
        {type === "create" && (
          <CreateAccount />
        )}

          {type === "login" && (
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
          )}
          {type === "login" && (
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
          )}

          {/* {type === "create" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event: { currentTarget: { checked: boolean } }) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )} */}
        </Stack>
        {type === "login"&& (
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "login"
              ? "Don't have an account? Create an Account"
              : "Already have an account? Login"}
          </Anchor>
          <Button type="submit" radius="xl">
            Login
          </Button>
        </Group>
        )}
      </form>
    
    </Paper>
  );
}
