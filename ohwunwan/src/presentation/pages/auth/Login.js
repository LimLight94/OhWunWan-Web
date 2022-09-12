import LoginGoogle from "../../components/LoginGoogle";
import {Box, Button, TextField} from "@mui/material";

const Login = () => {
  return (
      <div className={"wrapper"}>
        <div className={"contents"}>
          <h1>오.운.완</h1>
          <Box
              component="form"
              sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
              }}
              noValidate
              autoComplete="off"
          >
            <div>
              <TextField id="outlined-basic" label="이메일" variant="outlined"/>
            </div>
            <div>
              <TextField
                  id="outlined-basic"
                  label="패스워드"
                  type="password"
                  variant="outlined"/>
            </div>
            <Button
                variant="contained"
                sx={{m: 1, width: '25ch'}}
            >
              로그인
            </Button>
            <div style={{margin: 20}}>
              <LoginGoogle/>
            </div>
          </Box>
        </div>
      </div>
  );
};

export default Login;