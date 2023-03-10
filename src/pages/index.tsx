import { AtomButton, AtomInput, AtomText, AtomWrapper } from "@stacklycore/ui";
import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { api } from "../utils/api";

const Home: NextPage = () => {
  const {
    data,
    refetch,
    isLoading: loadingData,
  } = api.roles.getroles.useQuery();
  const { mutateAsync, isLoading: loadingMutation } =
    api.roles.createrole.useMutation();
  const [role, setRole] = useState({ name: "", label: "" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AtomWrapper
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AtomText>Roles</AtomText>
        <AtomWrapper>
          {data?.map((role) => (
            <AtomText key={role.id}>
              <AtomText>
                {role.name} {role.label}
              </AtomText>
            </AtomText>
          ))}
        </AtomWrapper>

        <AtomText>Create Role</AtomText>
        <AtomWrapper>
          {loadingData || loadingMutation ? (
            <>
              <AtomText>loading...</AtomText>
            </>
          ) : (
            <>
              <AtomInput
                labeltext="Name"
                type="text"
                input={{
                  value: role.name,
                  onChange: (e) => setRole({ ...role, name: e.target.value }),
                }}
              />
              <br />
              <AtomInput
                labeltext="Label"
                type="text"
                input={{
                  value: role.label,
                  onChange: (e) => setRole({ ...role, label: e.target.value }),
                }}
              />
              <AtomButton
                onClick={async () => {
                  await mutateAsync(role);
                  await refetch();
                }}
              >
                Create
              </AtomButton>
            </>
          )}
        </AtomWrapper>
      </AtomWrapper>
    </>
  );
};

export default Home;
