document.addEventListener("DOMContentLoaded", () => {
  document.cookie.split(";").forEach((cookie) => {
    const cookieName = cookie.split("=")[0].trim();
    document.cookie = `${cookieName}=; expires=${new Date(0).toUTCString()}; path=/`;
  });
});
