import NextAuth from "next-auth";
import { authOptions } from "../../../lib/authOptions"; // ✅ Use alias or correct path

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
