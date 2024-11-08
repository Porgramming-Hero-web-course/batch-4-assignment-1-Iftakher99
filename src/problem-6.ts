{
  //interface
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  //fn
  function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
  }
  //   // Sample Input :
  //   const myProfile: Profile = {
  //     name: 'Alice',
  //     age: 25,
  //     email: 'alice@example.com',
  //   };
  //   console.log(updateProfile(myProfile, { age: 26 }));
}
