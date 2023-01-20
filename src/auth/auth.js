import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const Auth = () => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [RMsg, setRMsg] = useState("");
  const [Lmsg, setLMsg] = useState("");
  const [user, setUser] = useState(""); // User object after registration / login
  const [session, setSession] = useState(""); // session object after registration / login
  const Register = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp(
      {
        email,
        password,
      },
      {
        data: {
          email,
        },
      }
    );
    if (error) {
      setRMsg(error.message);
    } else {
      setRMsg("User created successfully");
      SpeechSynthesisUtterance(data.user);
    }
  };
};

export default Auth;
