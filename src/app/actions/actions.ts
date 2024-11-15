"use server";

import { createClient } from "@supabase/supabase-js";

// Supabaseクライアントの初期化
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function getLike() {
  try {
    // likesテーブルから最初のレコードを取得
    const { data: like, error } = await supabase
      .from("User")
      .select("like")
      .single();

    if (error) {
      // レコードが存在しない場合は新規作成
      const { data: newLike } = await supabase
        .from("User")
        .insert([{ like: 0 }])
        .select()
        .single();

      return newLike?.like ?? 0;
    }

    return like?.like ?? 0;
  } catch {
    return 0;
  }
}

export async function incrementLike() {
  try {
    // 現在のレコードを取得
    const { data: currentLike } = await supabase
      .from("User")
      .select("id, like")
      .single();

    if (!currentLike) {
      return getLike();
    }

    // カウントをインクリメント
    const { data: updatedLike } = await supabase
      .from("User")
      .update({ like: currentLike.like + 1 })
      .eq("id", currentLike.id)
      .select()
      .single();

    return updatedLike?.like ?? currentLike.like;
  } catch {
    return getLike();
  }
}
