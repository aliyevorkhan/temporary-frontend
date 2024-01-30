import PasswordChangeForm from "./components/password-change-form";

const PasswordChangePage = () => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <h2 className="font-medium text-2xl mb-7">Şifrəni dəyiş</h2>
      </div>
      <PasswordChangeForm />
    </div>
  );
};

export default PasswordChangePage;
