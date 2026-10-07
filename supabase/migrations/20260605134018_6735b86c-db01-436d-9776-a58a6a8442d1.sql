create policy "Admins manage site media - insert"
on storage.objects for insert to authenticated
with check (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));

create policy "Admins manage site media - update"
on storage.objects for update to authenticated
using (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'))
with check (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));

create policy "Admins manage site media - delete"
on storage.objects for delete to authenticated
using (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));

create policy "Admins can read site media"
on storage.objects for select to authenticated
using (bucket_id = 'site-media' and public.has_role(auth.uid(), 'admin'));
