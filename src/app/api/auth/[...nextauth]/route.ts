import NextAuth from "next-auth";

import { authOptions } from "@cs-magic/react/next-auth.options";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
