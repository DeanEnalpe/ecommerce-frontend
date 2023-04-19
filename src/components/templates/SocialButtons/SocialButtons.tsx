import { Button, ButtonProps, Group } from '@mantine/core';
import { BrandGoogle, BrandLinkedin, BrandTwitter } from 'tabler-icons-react';



export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<'a'>) {
  return (
  <Button 
  component='a'
  leftIcon={<BrandGoogle />} 
  variant="default" 
  color="gray" 
  {...props} 
  />
  )
}

// Twitter button as anchor
export function TwitterButton(props: ButtonProps & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <Button
      component="a"
      leftIcon={<BrandTwitter 
        size="1rem" 
        color="black" />}
        variant="default"
      {...props}
    />
  )
}

// LinkedIn button as anchor
export function LinkedInButton(props: ButtonProps & React.ComponentPropsWithoutRef<'a'>) {
  return (
    <Button
      component="a"
      leftIcon={<BrandLinkedin 
        size="1rem" 
        color="black" />}
        variant="default"
      {...props}
    />
  )
}
// export function GmailButton(props: ButtonProps & React.ComponentPropsWithoutRef<'a'>) {
//     return (
//       <Button
//         component="a"
//         leftIcon={<BrandGmail
//           size="1rem" 
//           color="black" />}
//           variant="default"
//         {...props}
//       />
//     );
//   }


export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton 
      href="https://www.google.com/" 
      target="_blank">
        Continue with Google
        </GoogleButton>
        {/* <BrandGmail 
        href="http://gmail.com/"
        target="_blank">
            ContinueWithGmail
        </BrandGmail> */}
      <TwitterButton 
      href="https://twitter.com/" 
      target="_blank">
        Follow on Twitter
      </TwitterButton>
    </Group>
  )
}