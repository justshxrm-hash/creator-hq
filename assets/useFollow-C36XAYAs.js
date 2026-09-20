import{g as f,u as d,d as y,s as e}from"./index-DYBkXO4A.js";import{u as r,a as u}from"./kick-COhazPnf.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=f("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=f("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]),g=i=>{const{user:o}=d(),n=y(),{data:a=!1,isLoading:c}=r({queryKey:["follow",o==null?void 0:o.id,i],queryFn:async()=>{if(!(o!=null&&o.id)||!i||o.id===i)return!1;const{data:l,error:w}=await e.from("follows").select("id").eq("follower_id",o.id).eq("following_id",i).maybeSingle();return w?(console.error("Error checking follow status:",w),!1):!!l},enabled:!!(o!=null&&o.id)&&!!i&&o.id!==i}),t=u({mutationFn:async()=>{if(!(o!=null&&o.id))throw new Error("Not authenticated");const{error:l}=await e.from("follows").insert({follower_id:o.id,following_id:i});if(l)throw l},onSuccess:()=>{n.invalidateQueries({queryKey:["follow",o==null?void 0:o.id,i]})}}),s=u({mutationFn:async()=>{if(!(o!=null&&o.id))throw new Error("Not authenticated");const{error:l}=await e.from("follows").delete().eq("follower_id",o.id).eq("following_id",i);if(l)throw l},onSuccess:()=>{n.invalidateQueries({queryKey:["follow",o==null?void 0:o.id,i]})}});return{isFollowing:a,isLoading:c,toggleFollow:()=>{a?s.mutate():t.mutate()},isPending:t.isPending||s.isPending}};export{p as V,k as a,g as u};
