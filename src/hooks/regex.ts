const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

export function emailCheck(email_address: string) {
  if (!email_regex.test(email_address)) {
    return false;
  } else {
    return true;
  }
}
